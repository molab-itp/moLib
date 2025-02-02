// index.js
//
// documentation and unit testing of moLib
//

console.log('in index.js');

// global variable my in browser and node
//
// globalThis.my = {};
let my = {};
let dbase;

// starting point for testing moLib database functions
//
async function test_start() {
  console.log('in test');

  my.fireb_config = 'jht9629';
  // my.fireb_config = 'jhtitp';
  my.mo_app = 'mo-test';
  my.mo_room = 'm0-test';
  my.nameDevice = 'mo-test-device';
  if (!globalThis.window) my.nameDevice += '-node';

  await setup_dbase();

  // mo-test / m0-test / a_device / ${uid} / test_prop
  //
  dbase.update_device({ per_device_str: 'hello device!' });

  dbase.update_device({ per_device_num: dbase.increment(1) });

  // mo-test / m0-test / a_group / s0 / item / test_count
  //
  dbase.update_item('item', { test_count: dbase.increment(1) });

  // mo-test / m0-test / a_group / s0 / item / test_step
  //
  dbase.update_item('item', { test_step: 1 });

  setup_animationFrame();
}

async function setup_dbase() {
  //
  // await dbase.app_init(my);
  dbase = await mo_dbase_init(my);

  observe_item();

  observe_comment_store();

  observe_devices();

  console.log('setup_dbase done');
}

function observe_item() {
  //
  dbase.observe('item', { observed_item });
  //
  function observed_item(item) {
    console.log('observed_item item', item);
    if (item.test_count != undefined) {
      my.test_count = item.test_count;
    }
    if (item.test_step != undefined) {
      my.test_step_changed = my.test_step != item.test_step;
      console.log('test_step diff', my.test_step, item.test_step);
      my.test_step = item.test_step;
    }
  }
}

function observe_comment_store() {
  //
  // mo-test / m0-test / a_group / s0 / comment_store
  //
  dbase.observe('comment_store', { observed_event });
  //
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

function observe_devices() {
  //
  dbase.devices_observe({ observed_key, observed_item });
  //
  // mo-test / m0-test / a_device / ${uid}
  // item info for all devices in the room
  //
  function observed_key(key, item) {
    console.log('observe_devices observed_key key', key, 'item', item);
  }
  //
  // mo-test / m0-test / a_device / ${my.uid}
  // item info for my device
  //
  function observed_item(item) {
    console.log('observe_devices observed_item', item);
  }
}

function setup_animationFrame() {
  if (globalThis.window) {
    window.requestAnimationFrame(animationFrame_callback);
  } else {
    setTimeout(animationFrame_callback, 0);
  }
}

function animationFrame_callback(timeStamp) {
  let timeSecs = timeStamp / 1000;
  // console.log('step_animation timeStamp', timeStamp);
  // window.requestAnimationFrame(animationFrame_callback);
  setup_animationFrame();

  if (my.test_step_changed) {
    my.test_step_changed = 0;
    console.log('test_step_changed my.test_step', my.test_step);
    switch (my.test_step) {
      case 1:
        test_step1();
        dbase.update_item('item', { test_step: dbase.increment(1) });
        break;
      case 2:
        dbase.update_item('item', { test_step: dbase.increment(1) });
        break;
      default:
        trim_comments();
        dbase.update_item('item', { test_step: 0 });
        break;
    }
  }
}

async function trim_comments() {
  let items = Object.entries(my.comment_store);
  console.log('trim_comments items', items);
  // remove all but the first
  for (let index = 1; index < items.length; index++) {
    let [key, entry] = items[index];
    if (entry.uid != my.uid) {
      console.log('trim_comments skipping ', entry.uid);
      continue;
    }
    console.log('trim_comments removing key', key);
    await dbase.remove_key('comment_store', key);
  }
}

async function test_step1() {
  //
  console.log('test_step1');

  // mo-test / m0-test / a_group / s0 / item / num_test
  //
  dbase.update_item('item', { num_test: 1959 });

  dbase.update_item('item', { num_test: dbase.increment(1) });

  let comment = 'love now';
  let name = 'nameX1';
  let uid = my.uid;
  let test_count = my.test_count;
  let createdAt = new Date().toISOString();
  let entry = { test_count, name, comment, createdAt, uid };

  // mo-test / m0-test / a_group / s0 / comment_store / ${key} / { ...entry }
  //
  let key = await dbase.add_key('comment_store', entry);
  console.log('added key', key);

  entry.comment = new Date().toISOString();
  entry.name = 'nameX2';
  let key2 = await dbase.add_key('comment_store', entry);
  console.log('added key2', key2);
}

// id_console_ul

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

test_start();
