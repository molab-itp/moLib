function setup_animationFrame() {
  window.requestAnimationFrame(animationFrame_callback);
}

function animationFrame_callback(timeStamp) {
  let timeSecs = timeStamp / 1000;
  // console.log('step_animation timeStamp', timeStamp);
  window.requestAnimationFrame(animationFrame_callback);

  //
  // attempt to start video after video cued and player.playVideo() called
  // !!@ Not working. must press play button or next
  // my.video_play_count
  //
  if (
    my.video_index_cued != null && //
    player_ready() &&
    player.getPlayerState() != YT.PlayerState.PLAYING
  ) {
    console.log('animationFrame_callback video_index_cued', my.video_index_cued);
    my.video_index_was_played = my.video_index_cued;
    my.video_index_cued = null;
    player.playVideo();
  }

  if (
    my.video_index_was_played != null && //
    player.getPlayerState() != YT.PlayerState.PLAYING &&
    timeSecs > 5.0
  ) {
    console.log('animationFrame_callback video_index_was_played', my.video_index_was_played);
    let index = my.video_index_was_played;
    my.video_index_was_played = null;
    video_play_index(index);
    return;
  }

  if (my.video_play_index_pending != null && player_ready()) {
    console.log('animationFrame_callback video_play_index_pending', my.video_play_index_pending);
    let index = my.video_play_index_pending;
    my.video_play_index_pending = null;
    video_play_index(index);
    return;
  }
  if (my.blackfacts_player_inited) {
    record_startup_time(timeSecs);
  } else {
    // Check for player setup stall
    // !!@ my. candidate
    if (timeSecs > 5.0) {
      console.log('animationFrame_callback player startup stall');
      player_startup_stalled();
    }
  }
  // if (!my.isRemote && !params.qrcode) {
  // if (my.blackfacts_qrcode) qrcode_show();
  // else qrcode_hide();
  // }
  if (my.animLoop) {
    my.animLoop.step({ action: stepAction, loop: my.playClip });
    let lapse = '';
    if (my.playClip) lapse = my.animLoop.lapse() + ' ' + my.stepCount;
    id_lapse_report.innerHTML = lapse;
  }
  if (my.pingLoop) {
    my.pingLoop.step({ loop: 1 });
  }
  show_message_status(timeSecs);
}

function show_message_status(timeSecs) {
  if (!timeSecs) timeSecs = '';
  if (!my.blackfacts_player_inited) {
    let str = 'Waiting for video ' + timeSecs.toFixed(2);
    if (my.stalled_report) {
      str += ' reload pending';
    }
    show_message_id(str);
  } else {
    if (params.title) {
      let str = params.title;
      show_message_id(str);
    }
    video_action_check();
  }
}

function video_action_check() {
  if (my.isRemote) {
    if (my.video_played_count != my.video_played_count_prior) {
      console.log('frame played_count change ', my.video_played_count, my.video_played_count_prior);
      my.video_played_count_prior = my.video_played_count;
      let time = player.getCurrentTime();
      dbase_update_item({ time });
      dbase_issue_actions({ play_video_action: 1 }, { group: my.group });
    }
  }
  if (
    !my.isRemote && //
    dbase_actions_issued(my.uid, { play_video_action: 1 }, { group: my.group })
  ) {
    console.log('frame dbase_actions_issued player.playVideo ', player_ready());
    if (player_ready()) {
      if (my.a_group_item) {
        let time = my.a_group_item.time;
        if (time != undefined) {
          console.log('frame dbase_actions_issued time ', time);
          player.seekTo(time);
        }
      }
      player.playVideo();
    }
  }
}

function record_startup_time(timeSecs) {
  if (!my.blackfacts_player_startup_time) {
    // console.log('record_startup_time timeSecs', timeSecs);
    my.blackfacts_player_startup_time = timeSecs;
    dbase_update_props({ startup_time: timeSecs });
  }
}

// if the video player does not startup within a few seconds
// we log a startup stall and reload the page
// hoping for player to start
//
function player_startup_stalled() {
  if (my.stalled_report) {
    return;
  }
  my.stalled_report = 1;

  let { increment } = fireb_.fbase;
  dbase_update_props({ startup_stall: increment(1) });

  setTimeout(function () {
    window.location.reload();
  }, 5.0 * 1000); // !!@ my. candidate
}
