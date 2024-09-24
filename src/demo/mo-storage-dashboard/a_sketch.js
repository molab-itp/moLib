// https://editor.p5js.org/jht9629-nyu/sketches/Osz28nOS9
// mo-storage-dashboard 47

// https://editor.p5js.org/jht9629-gmail/sketches/VWbtyZTnx
// mo-storage-dashboard
// https://molab-itp.github.io/98-MoGallery-p5js/demos/mo-storage-dashboard

// !!@ update to lib
// record and play back audio and image sequence to firebase

let my = {};
function my_setup() {
  // update to verify change on mobile
  my.version = '?v=4';
  // Aspect ratio of video capture/
  // will be scaled by rezScale
  my.width = 480;
  my.height = 640;
  my.vFlip = 0;
  my.facingMode = 'user';
  my.face = 1;
  my.showVideo = 1;
  my.soundEnable = 0;
  my.fcount = 1;
  my.record = 0;
  my.replay = 0;
  my.uid = '-none-';
  my.rezScale = 1; // scale = 16;
  my.imageQuality = 1; // imageQuality = 0.01;
  my.captionScale = 32;
  my.interval = 1;
  my.debugLog = 1;
  my.count_base = 100;
  my.count_max = 5;
  my.colors = ['red', 'green', 'gold'];
  my.colorIndex = 1;
  my.logLinesMax = 3;
  my.clipsName = 'clips';
  my.recordCountDown = {
    max: 3,
    next_secs: 0,
  };
}

function setup() {
  console.log('mo-storage-video setup');
  my_setup();

  my_init();

  my.canvas = createCanvas(my.width, my.height);

  ui_init();

  let config = fireb_.init('jht9629');
  // let config = fireb_.init('jht1493');
  ui_log('config.projectId', config.projectId);

  fireb_signIn();

  textSize(40);
}

function draw() {
  //
  draw_update();

  ui_init_update();

  sound_draw();
}

function draw_update() {
  if (!video_ready()) return;

  // faster to get entire video frame as an image
  let img = my.video.get();

  let layer = my.layer;

  if (my.showVideo) {
    layer.image(img, 0, 0);
  }

  draw_number(my.count + 1 + my.count_base, { layer });
  draw_millis(layer);
  draw_dateISOString(layer);

  if (my.replay) {
    image(my.replayLayer, 0, 0, width, height);
  } else {
    image(layer, 0, 0, width, height);
  }

  record_state_track();

  if (!my.record_preroll) {
    draw_count();
  }

  let now = millis() / 1000;
  if (now > my.next_secs) {
    my.next_secs = now + my.interval;
    update_interval();
  }
}

function update_interval() {
  // console.log('update_interval my.count', my.count);

  if (my.replay) {
    fstorage_img_download();
    if (my.soundEnable) {
      sound_playback_start();
    }
  } else {
    sound_playback_stop();
  }

  if (my.record_preroll) {
    return;
  }

  if (my.record) {
    fstorage_img_upload();
    if (my.count == 0 && my.soundEnable) {
      sound_record_start();
    }
  }

  if (my.fcount) {
    if (adjust_count(1) && my.record) {
      my.record = 0;
      my.recordChk.checked(0);
      my.replay = 1;
      my.replayChk.checked(1);
      if (my.soundEnable) {
        sound_record_stop();
      }
    }
  }
}

function adjust_count(delta) {
  my.count = my.count + delta;
  let wrap = 0;
  if (my.count >= my.count_max) {
    my.count = 0;
    wrap = 1;
  } else if (my.count < 0) {
    my.count = my.count_max - 1;
    wrap = 1;
  }
  return wrap;
}

function fireb_signIn() {
  let { signInAnonymously, auth } = fireb_;
  signInAnonymously(auth)
    .then(() => {
      ui_log('signInAnonymously OK');
      my.uid = auth.currentUser.uid;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      ui_log('fireb_signIn errorCode', errorCode);
      ui_log('fireb_signIn errorMessage', errorMessage);
    });
}

// https://en.wikipedia.org/wiki/15_minutes_of_fame
// --> 15 seconds

// setInterval will flood out draw when saving and replaying
// setInterval(update_interval, my.interval * 1000);
// frameRate(2);

// image(img, x, y, [width], [height])
// image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])
