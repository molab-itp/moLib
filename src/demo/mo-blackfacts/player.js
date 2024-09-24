'use strict';

// console.log('BlackFacts player.js');

// 2024-02-09 jht: move script tag to following code to load iframe_api fixed problem below
// 2024-01-09 jht: page sometimes needs several reloads to show video
// https://developers.google.com/youtube/iframe_api_reference
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let dateFactsKeys = Object.keys(dateFacts).sort();
let nfacts = dateFactsKeys.length;

function dumpDateFacts() {
  // console.log('dumpDateFacts  nfacts', nfacts);
  let str = '{';
  for (let index = 0; index < nfacts; index++) {
    let key = dateFactsKeys[index];
    let entry = dateFacts[key];
    entry.index = index;
    let ent = JSON.stringify(entry);
    str += `"${key}": ${ent},`;
    // console.log('dumpDateFacts index', index, entry);
  }
  str += '}';
  // let ndateJSON = JSON.stringify(ndata, null, 2);
  downloadToFile('dumpDateFacts-ndateJSON', str);
}

// https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server
function downloadToFile(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// dumpDateFacts();

let videoKey = null;
let player = null;
let playlistIndex = 0;

// https://dev.blackfacts.com/kiosk?delay=2000&volume=50&playlist=today,451kA90ehvA
let params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let playlist = (params.playlist || 'today').split(',');
let delay = params.delay || 0;
let volume = parseInt(params.volume || '0', 10);

//document.documentElement.requestFullscreen();

function onYouTubeIframeAPIReady() {
  // console.log('BlackFacts onYouTubeIframeAPIReady player', player);
  if (!player) {
    setupVideo();
  }
}

function onYouTubePlayerAPIReady() {
  // console.log('BlackFacts onYouTubePlayerAPIReady player', player);
  if (!player) {
    setupVideo();
  }
}

function execPlaylist() {
  if (playlist.length > 0) {
    if (delay > 0) {
      window.setTimeout(() => execCommand(), delay);
    } else {
      execCommand();
    }
  }
}

function dateFactForIndex(index) {
  let key = dateFactsKeys[index % nfacts];
  return dateFacts[key];
}

// called from mo_blackfacts_index_value
// play video given index into dateFacts
//
function video_play_index(index) {
  // ignore cloud actions if playlist in url
  if (url_has_playlist()) {
    // console.log('video_play_index params.playlist', params.playlist);
    return;
  }
  // flag having received index event
  my.execRemoteTrigger = 1;

  let entry = dateFactForIndex(index);
  videoKey = entry.videoKey;
  // console.log('video_play_index index', index, 'entry', entry);
  console.log('video_play_index videoKey', videoKey, 'index', index);

  // reset play list to selected video
  playlist = [videoKey];
  playlistIndex = 0;

  if (!player_ready()) {
    console.log('video_play_index no player', player, 'index', index);
    my.video_play_index_pending = index;
    return;
  }
  if (my.video_cued_count >= 0 && my.video_cued_count <= 2) {
    my.video_index_cued = index;
  }

  player.cueVideoById(videoKey);
}

function url_has_playlist() {
  return typeof params.playlist == 'string';
}

function player_ready() {
  return player && player.cueVideoById != null;
}

// called when video play ends
function video_ended() {
  // Advance to next video, maybe
  if (my.execRemoteTrigger && !url_has_playlist()) {
    console.log('video_ended my.execRemoteTrigger next_action');
    video_ended_next_action();
    return;
  }
  execCommand();
}

function execCommand() {
  // if (my.playNext) {
  //   console.log('execCommand my.playNext next_action');
  //   next_action();
  //   return;
  // }
  // Select next video from playList
  //
  videoKey = getVideoKey(playlist[playlistIndex]);
  console.log('execCommand  videoKey', videoKey);
  player.cueVideoById(videoKey);
  playlistIndex = (playlistIndex + 1) % playlist.length;
  // console.log('Incremented playlistIndex to: ' + playlistIndex);
}

function getVideoKey(playlistEntry) {
  return playlistEntry === 'today' ? getDateVideoKey() : playlistEntry;
}

function getDateVideoKey(date) {
  // Default to today
  let theDate = date || new Date();
  let key = dateKey(theDate);
  let entry = dateFacts[key];
  if (!entry) {
    console.log('getDateVideoKey no entry date', date, 'key', key);
    entry = dateFacts['0101'];
  }
  let videoKey = entry.videoKey;
  return videoKey;
  //
  function dateKey(theDay) {
    return formatDay(1 + theDay.getMonth()) + formatDay(theDay.getDate());
  }
  function formatDay(num) {
    return ('00' + num).slice(-2);
  }
}

function setupVideo() {
  // console.log('BlackFacts setupVideo creating YTPlayer');
  // my.blackfacts_player_inited = 1;
  player = new YT.Player('id_player', {
    playerVars: {
      origin: location.origin,
      // cc_load_policy: true,
      // cc_load_policy: params.cc ? 1 : 0, // Enable closed captions by default
      // cc_lang_pref: 'en',
      autoplay: 1,
    },
    events: {
      onReady: function (event) {
        // console.log('BlackFacts YTPlayer ready');
        // The player play method cueVideoById just became available.
        //player.unMute();
        //player.setVolume(volume);
        //console.log('Set volume to ' + volume);
        //player.mute();

        console.log('BlackFacts YTPlayer ready');
        if (!my.blackfacts_player_inited) my.blackfacts_player_inited = 0;
        my.blackfacts_player_inited++;
        if (my.blackfacts_player_inited) {
          id_blackfacts_num.innerHTML = '';
          id_message_text.innerHTML = id_blackfacts_num.innerHTML = '';
        }

        execPlaylist();
      },
      onStateChange: function (event) {
        let state = event.data;
        switch (state) {
          case -1:
            // console.log('YT.Player unstarted');
            break;
          case YT.PlayerState.ENDED:
            // console.log('BlackFacts YT.PlayerState.ENDED ' + videoKey);
            video_ended();
            break;
          case YT.PlayerState.PAUSED:
            // console.log('YT.PlayerState.PAUSED ' + videoKey);
            break;
          case YT.PlayerState.PLAYING:
            //player.unMute();
            //player.setVolume(volume);
            //console.log('Set volume to ' + volume);
            console.log('YT.PlayerState.PLAYING ' + videoKey);
            if (!my.video_played_count) my.video_played_count = 0;
            my.video_played_count++;
            break;

          case YT.PlayerState.BUFFERING:
            // console.log('YT.PlayerState.BUFFERING ' + videoKey);
            break;
          case YT.PlayerState.CUED:
            console.log('YT.PlayerState.CUED');
            if (!my.video_cued_count) my.video_cued_count = 0;
            my.video_cued_count++;
            player.playVideo();
            break;
        }
      },
      onError: function (event) {
        let errorNum = event.data;
        switch (errorNum) {
          case 2:
            video_player_error(' The request contains an invalid parameter value');
            break;
          case 5:
            video_player_error('The requested content cannot be played in an HTML5 player');
            break;
          case 100:
            video_player_error('The video requested was not found');
            break;
          case 101:
          case 150:
            video_player_error('The owner of the requested video does not allow it to be played in embedded players');
            break;
        }
      },
    },
  });
}

function video_player_error(msg) {
  console.log('YT.Player error: ' + msg);
  console.log('player videoKey', videoKey);
}
