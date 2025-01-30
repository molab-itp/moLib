//

console.log('in test/index.js');

my_setup();
setup_dbase();

//
function my_setup() {
  //
  my.fireb_config = 'jht9629';
  // my.fireb_config = 'jht1493';
  // my.fireb_config = 'jhtitp';
  my.dbase_rootPath = 'm0-@r-@w-';
  my.mo_room = 'm1-test';
  my.mo_app = 'mo-test';
  my.nameDevice = 'mo-test-device';

  // dbase  values
  my.test_count = 0;
  my.test_total_count = 0;
}

async function setup_dbase() {
  //
  await dbase_app_init(my);

  console.log('setup_dbase done');
}

// Control the level of logging for debugging

function ui_log(...args) {
  // console.log(...args);
}
globalThis.ui_log = ui_log;

function ui_logv(...args) {
  // console.log(...args);
}
globalThis.ui_logv = ui_logv;
