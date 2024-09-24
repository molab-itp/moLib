//
// my.canvas is created before ui_init call
//
function ui_init() {
  ui_init_controls();

  ui_init_update();

  // Move the canvas below all the ui elements
  let belt = document.querySelector('body');
  let melt = document.querySelector('main');
  belt.insertBefore(melt, null);
}

function ui_init_controls() {
  if (!my.replayName) {
    video_create();
  }

  my.verBtn = createButton(my.version.substring(1));
  my.verBtn.mousePressed(function () {
    location.reload();
  });

  create_clipsName_input();

  createElement('br');

  my.soundChk = createCheckbox('Sound', my.soundEnable);
  my.soundChk.style('display:inline');
  my.soundChk.changed(function () {
    my.soundEnable = this.checked();
    sound_state_update();
  });

  my.recordChk = createCheckbox('Record', my.record);
  my.recordChk.style('display:inline');
  my.recordChk.changed(function () {
    my.record = this.checked();
    record_state_update(my.record);
    sound_state_update();
  });

  my.replayChk = createCheckbox('Replay', my.replay);
  my.replayChk.style('display:inline');
  my.replayChk.changed(function () {
    my.replay = this.checked();
    init_counts();
  });

  createElement('br');

  create_count_selection();

  create_resolution_selection();

  createButton('Color+').mousePressed(function () {
    my.colorIndex = (my.colorIndex + 1) % my.colors.length;
  });

  createElement('br');

  if (!my.replayName) {
    my.faceChk = createCheckbox('Face', my.face);
    my.faceChk.style('display:inline');
    my.faceChk.changed(faceChk_action);
  }

  my.videoChk = createCheckbox('Video', my.showVideo);
  my.videoChk.style('display:inline');
  my.videoChk.changed(function () {
    my.showVideo = this.checked();
  });

  my.fcountChk = createCheckbox('Count', my.fcount);
  my.fcountChk.style('display:inline');
  my.fcountChk.changed(function () {
    my.fcount = this.checked();
  });

  createButton('<-1').mousePressed(function () {
    adjust_count(-1);
    update_interval();
  });

  createButton('1+>').mousePressed(function () {
    adjust_count(1);
    update_interval();
  });

  createElement('br');
}

function create_clipsName_input() {
  let elm = createInput(my.clipsName).input(function () {
    my.clipsName = this.value();
    clipsName_update();
  });
}

function create_count_selection() {
  let sel = createSelect();
  sel.option('Count: 3', 3);
  for (let index = 5; index <= 100; index += index) {
    sel.option('Count: ' + index, index);
  }
  sel.option('Count: 99', 99);
  sel.selected(my.count_max);
  sel.changed(function () {
    let nval = parseFloat(this.value());
    my.count_max = nval;
  });
}

function create_resolution_selection() {
  let sel = createSelect();
  for (let index = 1; index <= 8; index++) {
    sel.option('Rez: ' + index, index);
  }
  sel.selected(my.rezScale);
  sel.changed(function () {
    let nval = parseFloat(this.value());
    my.rezScale = nval;
    init_layer();
    my.video.remove();
    video_create();
  });
}

function faceChk_action() {
  my.face = this.checked();
  my.facingMode = my.face ? 'user' : 'environment';
  console.log('my.facingMode', my.facingMode);
  my.video.remove();
  video_create();
}

function ui_init_update() {
  ui_init_update_info();
  my.ui_last = ui_break('break1');
}

function ui_init_update_info() {
  // ui_span('updateCount', ' uc:' + my.updateCount);
  // ui_span('nitems', ' ni:' + my.nitems);
  if (my.guestName) {
    ui_span('guestName', ' guestName:' + my.guestName);
  }
  if (my.replayName) {
    ui_span('replayName', ' replayName:' + my.replayName);
  }
  if (my.uid) {
    ui_span('uid', ' uid:' + my.uid);
  }
}

function ui_break(id) {
  let elm = select('#' + id);
  if (!elm) {
    elm = createElement('br').id(id);
  }
  return elm;
}

// !!@ Move to Lib
function ui_span(id, html) {
  let span = select('#' + id);
  if (document.fullscreenElement) {
    if (span) {
      span.remove();
    }
    return;
  }
  if (!span) {
    span = createSpan().id(id);
  }
  span.html(html);
  return span;
}

// !!@ Move to Lib
function ui_log(...args) {
  // if (! my.debugLog) return
  console.log(...args);
  if (!my.logLines) {
    my.logLines = [];
    my.logSummary_div = createDiv('');
  }
  my.logLines.push(args.join(' '));
  if (my.logLines.length > my.logLinesMax) {
    my.logLines.splice(0, 1);
  }
  my.logSummary_div.html(my.logLines.join('<br/>'));
}

// !!@ Move to Lib
function ui_error(...args) {
  ui_log(...args);
}

// createButton('<-100').mousePressed(function () {
//   my.count_base -= 100;
//   if (my.count_base < 0) {
//     my.count_base = 0;
//   }
//   init_counts();
// });

// createButton('100+>').mousePressed(function () {
//   my.count_base += 100;
//   init_counts();
// });

// createButton('SignIn').mousePressed(function () {
//   fireb_signIn();
// });

// createButton('Reset count').mousePressed(function () {
//   my.count = my.count_base;
// });

// createButton('Upload').mousePressed(function () {
//   fstorage_img_upload();
// });

// my.reloadBtn = createButton('Reload');
// my.reloadBtn.mousePressed(function () {
//   location.reload();
// });

// https://www.htmlsymbols.xyz/unicode/U+FF0B
// Fullwidth plus sign

// https://www.ssec.wisc.edu/~tomw/java/unicode.html

// function init_replay() {
//   // console.log('init_replay', my.replay);
//   my.draw_func = my.replay ? draw_replay : draw_guest;
// }
