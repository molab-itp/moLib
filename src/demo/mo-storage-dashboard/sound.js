function sound_state_update() {
  if (my.soundEnable) {
    sound_init();
  } else {
    sound_playback_stop();
  }
}

function sound_init() {
  sound_AudioContext_resume();
  // create an audio in
  my.mic = new p5.AudioIn();
  // users must manually enable their browser microphone for recording to work properly!
  my.mic.start();
  // create a sound recorder
  my.recorder = new p5.SoundRecorder();
  // connect the mic to the recorder
  my.recorder.setInput(my.mic);
  // create an empty sound file
  // that we will use to playback the recording
  my.soundFile = new p5.SoundFile();
  my.sound_record_started = 0;

  sound_draw_init();
}

function sound_record_start() {
  console.log('sound_record_start');
  if (my.sound_record_started) {
    return;
  }
  my.sound_record_started = 1;
  // Tell recorder to record to a p5.SoundFile
  // which we will use for playback
  my.recorder.record(my.soundFile);
  // my.amp = new p5.Amplitude();
  // my.amp.setInput(my.soundFile);
}

function sound_AudioContext_resume() {
  let aSoundContext = getAudioContext();
  // console.log('aSoundContext.state', aSoundContext.state);
  if (aSoundContext.state !== 'running') {
    aSoundContext.resume();
  }
}

function sound_record_stop() {
  console.log('sound_record_stop');
  my.sound_record_started = 0;
  // stop recorder, and send the result to soundFile
  my.recorder.stop();
  // Prepare for upload
  my.fstorage_sound_upload_started = 1;
  my.fstorage_sound_upload_completed = 0;
  my.sound_downFile = null;

  // Give record a sec before asking for blob
  setTimeout(sound_getBlob, 1 * 1000);
}

function sound_playback_start() {
  // console.log('sound_playback_start', my.sound_downFile ? 'soundFile' : '-');
  // skip if soundfile is already playing
  if (my.sound_downFile) {
    return;
  }
  // Wait for upload to complete
  if (
    my.fstorage_sound_upload_started && //
    !my.fstorage_sound_upload_completed
  ) {
    return;
  }
  // download the sound
  fstorage_sound_download();
}

function sound_playback_stop() {
  // console.log('sound_playback_stop', my.sound_downFile ? 'soundFile' : '-');
  if (!my.sound_downFile) {
    return;
  }
  ui_log('sound_playback_stop', my.sound_downFile ? 'soundFile' : '-');
  // stop the sound and reset vars
  my.sound_downFile.stop();
  my.sound_downFile = null;
  my.sound_download_blob = null;
  my.amp = null;
}

function sound_downloaded() {
  my.sound_downFile.play();
  my.sound_downFile.loop();
  if (!my.amp) {
    my.amp = new p5.Amplitude();
  }
  my.amp.setInput(my.sound_downFile);

  sound_draw_init();
}

// https://p5js.org/reference/#/p5.SoundFile
// new p5.SoundFile(path, [successCallback], [errorCallback], [whileLoadingCallback])

// https://stackoverflow.com/questions/34934862/how-to-replay-an-audio-blob-in-javascript
// const reader = new FileReader();
// reader.onload = function(e) {
//     const srcUrl = e.target.result;
//     audioNode.src = srcUrl;
// };
// reader.readAsDataURL(blob);

// https://p5js.org/reference/#/p5/getAudioContext
// function draw() {
//   background(255);
//   textAlign(CENTER);

//   if (getAudioContext().state !== 'running') {
//     text('click to start audio', width/2, height/2);
//   } else {
//     text('audio is enabled', width/2, height/2);
//   }
// }
// function touchStarted() {
//   if (getAudioContext().state !== 'running') {
//     getAudioContext().resume();
//   }
//   var synth = new p5.MonoSynth();
//   synth.play('A4', 0.5, 0, 0.2);
// }

// startAudioContext
// userStartAudio

// https://p5js.org/reference/#/p5/userStartAudio

// let a_audioCtx = getAudioContext();
// a_audioCtx.resume();
