//

console.log('in index.js');

globalThis.my = {};

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
}

async function setup_dbase() {
  //
  await dbase_app_init(my);

  observe_item();

  observe_comment_store();

  console.log('setup_dbase done');
}

function observe_item() {
  dbase_app_observe({ observed_item }, 'item');
  function observed_item(item) {
    console.log('observed_item item', item);
    if (item.test_count != undefined) {
      my.test_count = item.test_count;
    }
    if (item.test_step != undefined) {
      my.test_step_changed = my.test_step != item.test_step;
      console.log('step diff', my.test_step, item.test_step);
      my.test_step = item.test_step;
    }
  }
}

function observe_comment_store() {
  dbase_app_observe({ observed_event }, 'comment_store');
  my.comment_store = {};
  function observed_event(event, key, item) {
    console.log('observed_event ', event, key, item);
    switch (event) {
      case 'add':
      case 'change':
        my.comment_store[key] = item;
        break;
      case 'remove':
        delete my.comment_store[key];
        break;
    }
  }
}

// Control the level of logging for debugging
function ui_log(...args) {
  console.log(...args);
}
function ui_logv(...args) {
  // console.log(...args);
}

test_start();

function setup_animationFrame() {
  window.requestAnimationFrame(animationFrame_callback);
}

function animationFrame_callback(timeStamp) {
  let timeSecs = timeStamp / 1000;
  // console.log('step_animation timeStamp', timeStamp);
  window.requestAnimationFrame(animationFrame_callback);

  if (my.test_step_changed) {
    my.test_step_changed = 0;
    console.log('test_step_changed my.test_step', my.test_step);
    switch (my.test_step) {
      case 1:
        test_step1();
        dbase_update_item({ test_step: dbase_increment(1) }, 'item');
        break;
      case 2:
        dbase_update_item({ test_step: dbase_increment(1) }, 'item');
        break;
      default:
        trim_comments();
        dbase_update_item({ test_step: 0 }, 'item');
        break;
    }
  }
}

async function trim_comments() {
  let items = Object.entries(my.comment_store);
  console.log('trim_comments items', items);
  // remove all but the first
  for (let index = 1; index < items.length; index++) {
    let entry = items[index];
    let key = entry[0];
    console.log('removing key', key);
    await dbase_remove_key('comment_store', key);
  }
}

async function test_start() {
  console.log('in test');

  my_setup();

  await setup_dbase();

  setup_animationFrame();

  dbase_update_item({ test_count: dbase_increment(1) }, 'item');

  dbase_update_item({ test_step: 1 }, 'item');
}

async function test_step1() {
  //
  console.log('test_step1');

  dbase_update_item({ num_test: 1959 }, 'item');

  dbase_update_item({ num_test: dbase_increment(1) }, 'item');

  let comment = 'love now';
  let name = 'nameX1';
  let uid = my.uid;
  let test_count = my.test_count;
  let date = new Date().toISOString();
  let entry = { test_count, name, comment, date, uid };

  let key = await dbase_add_key('comment_store', entry);
  console.log('added key', key);

  entry.comment = new Date().toISOString();
  entry.name = 'nameX2';
  let key2 = await dbase_add_key('comment_store', entry);
  console.log('added key2', key2);

  dbase_update_props({ test_prop: 'test_prop' });

  dbase_update_props({ test_num: dbase_increment(1) });

  dbase_info_update({ info_count: dbase_increment(1), item2: 'info-item2' });
}
