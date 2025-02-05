// https://editor.p5js.org/jht9629-gmail/sketches/xxx
// moSalon room-record

let videoKit; // home for library routines
let my = {};

function setup() {
  // Lowest pixel density for performance
  pixelDensity(1);

  // Need some starting dimensions for canvas.
  // will get adjusted by videoKit later in startup
  my.canvas = createCanvas(100, 100);

  // must call createCanvas before new p5videoKit

  videoKit = p5videoKit_init(a_config);

  videoKit.save_canvas_handler = save_canvas_handler;

  setup_dbase();

  my.startPeriod = millis();
  // my.shortSavePeriod = 5 * 1000;
  // my.shortSavePeriod = 2 * 600 * 1000;
  // my.savePeriod = my.shortSavePeriod;
  my.savePeriod = 1 * 60 * 1000;
  my.activityCount = 0;
  my.wasActive = 0;
}

globalThis.eff_bestill_mo_activitySum = 0;

function draw() {
  videoKit.draw();
  if (eff_bestill_mo_activitySum > 0) {
    if (!my.wasActive) {
      if (my.activityCount == 0) {
        save_canvas_handler();
      }
      my.activityCount++;
    }
    my.wasActive = 1;
    // console.log('draw eff_bestill_mo_activitySum', eff_bestill_mo_activitySum, frameCount);
  } else {
    my.wasActive = 0;
  }
  let now = millis();
  let lapse = now - my.startPeriod;
  if (lapse > my.savePeriod) {
    // if (my.wasActive) {
    //   my.savePeriod = my.shortSavePeriod;
    // } else {
    //   my.savePeriod = my.longSavePeriod;
    // }
    my.startPeriod = now;
    my.activityCount = 0;
    my.wasActive = 0;
  }
}

let a_config = {};

// track startup time for debugging
let a_start_now = window.performance.now();

// disables FES to improve performance
p5.disableFriendlyErrors = true;

// https://github.com/molab-itp/moSalon

function ui_log(...args) {
  console.log(...args);
  let str = args.join(' ') + '<br/>';
  if (globalThis.id_console_ul) {
    id_console_ul.innerHTML += str;
  }
}
globalThis.ui_log = ui_log;

function ui_verbose(...args) {
  // console.log(...args);
}
globalThis.ui_verbose = ui_verbose;

function test_settings_restore() {
  console.log('test_restore');
  store_restore_from(aSettings);
}

let aSettings = {
  setting: '',
  comment: 'bestill_mo to be here - 4k 2x2',
  back_color: 200,
  room_name: 'VideoKit-Room-1',
  patch_layout: '2x2',
  canvas_size: '3840x2160',
  capture_size: '1920x1080',
  render_size: 'Canvas',
  chat_name: 'jht',
  chat_chk: 0,
  live_index: 0,
  live_chk: 0,
  urects_lock: 0,
  urects_count: 4,
  canvas_resize_ref: '',
  canvas_data_chk: 0,
  mediaDiv_states: [
    null,
    {
      vis: 0,
      mute: 1,
    },
    {
      vis: 0,
      mute: 1,
    },
  ],
  patches: [
    {
      eff_spec: {
        ipatch: 0,
        imedia: 1,
        eff_label: 'bestill_mo',
        urect: {
          x0: 0,
          y0: 0,
          width: 1920,
          height: 1080,
        },
      },
      eff_props: {
        factor: 10,
        mirror: 1,
        report: 0,
        frameCountMod: 20,
        activitySumLevel: 1,
      },
    },
    {
      eff_spec: {
        ipatch: 1,
        imedia: 1,
        eff_label: 'bestill',
        urect: {
          x0: 1920,
          y0: 0,
          width: 1920,
          height: 1080,
        },
      },
      eff_props: {
        factor: 10,
        mirror: 0,
      },
    },
    {
      eff_spec: {
        ipatch: 2,
        imedia: 1,
        eff_label: 'bestill',
        urect: {
          x0: 0,
          y0: 1080,
          width: 1920,
          height: 1080,
        },
      },
      eff_props: {
        factor: 200,
        mirror: 0,
      },
    },
    {
      eff_spec: {
        ipatch: 3,
        imedia: 1,
        eff_label: 'bestill',
        urect: {
          x0: 1920,
          y0: 1080,
          width: 1920,
          height: 1080,
        },
      },
      eff_props: {
        factor: 500,
        mirror: 1,
      },
    },
  ],
};

// test_settings_restore()
