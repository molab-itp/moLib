// https://editor.p5js.org/jht9629-nyu/sketches/xxxx
// p5moLibrary mo-shout 71

// a play list of websites show in an iframe

// [] loop, play next after n seconds
// [] move to mo-shout with qr code

let my = {};

function my_setup() {
  my.playList = [
    'https://molab-itp.github.io/p5moLibrary/src/demo/mo-videoplayer/?playlist=DrI_8IFzkpw',
    'https://cheerful-ganache-f31c35.netlify.app/',
    'https://molab-itp.github.io/p5moLibrary/src/demo/mo-videoplayer/?playlist=QvoCLigmJUI',
    'https://molab-itp.github.io/p5moLibrary/src/demo/mo-videoplayer/?playlist=dhQ7aj9s_kw',
    'https://molab-itp.github.io/p5moLibrary/src/demo/mo-videoplayer/?playlist=JCS-g3HwXdc',
  ];
  my.playIndex = 0;
  my.width = windowWidth;
  my.height = windowHeight;
  my.fireb_config = 'jht9629';
  // my.fireb_config = 'jht1493';
  // my.fireb_config = 'jhtitp';
  my.dbase_rootPath = 'm0-@r-@w-';
  my.roomName = 'room0';
  my.mo_app = 'mo-shout';
  my.nameDevice = '';

  my.stepSecs = 60.0 + 30.0;
  // my.stepSecs = 0;
  my.stepLapsed = 0;

  let params = get_url_params();
  console.log('params', params);

  my.isRemote = !params.qrcode;
  if (params.group) {
    my.group = params.group;
  }
  if (!my.group) {
    my.group = 's0';
  }
  console.log('my_init my.group', my.group);

  position_qrcode();

  if (my.isRemote) {
    qrcode_hide();
  }
}

function setup() {
  my_setup();

  init_ui();

  // my.canvas = createCanvas(my.width, my.height);
  noCanvas();

  dbase_app_init({ completed: startup_completed });
}

function draw() {
  background(0);
  my.stepLapsed += deltaTime / 1000;
  if (my.stepSecs && my.stepLapsed > my.stepSecs) {
    my.stepLapsed = 0;
    playIndexUpAction();
  }
  //
}

function startup_completed() {
  console.log('startup_completed');

  // dbase_devices_observe({ observed_item, all: 1 });
  dbase_app_observe({ observed_item });

  function observed_item(device) {
    console.log('observed_item device', device);
    if (device.playIndex != undefined) {
      set_playIndex(device.playIndex);
    }
  }
}

function set_playIndex(newValue) {
  console.log('set_playIndex my.playIndex', newValue);
  my.playIndex = newValue;
  my.playIndex_span.html(my.playIndex);
  my.iframe_element.elt.src = my.playList[my.playIndex];
}

function playIndexUpAction() {
  my.stepLapsed = 0;
  if (my.playIndex < my.playList.length - 1) {
    dbase_update_item({ playIndex: dbase_increment(1) });
    // dbase_update_props({ playIndex: dbase_increment(1) });
  } else {
    dbase_update_item({ playIndex: 0 });
    // dbase_update_props({ playIndex: 0 });
  }
}

function playIndexDownAction() {
  if (my.playIndex > 0) {
    dbase_update_item({ playIndex: dbase_increment(-1) });
    // dbase_update_props({ playIndex: dbase_increment(-1) });
  } else {
    dbase_update_item({ playIndex: my.playList.length - 1 });
    // dbase_update_props({ playIndex: my.playList.length - 1 });
  }
}

function playIndexFirst_action() {
  dbase_update_item({ playIndex: 0 });
  // dbase_update_props({ playIndex: 0 });
}

// https://editor.p5js.org/jht9629-nyu/sketches/EEafnQwr1
// p5moExamples vote 47
