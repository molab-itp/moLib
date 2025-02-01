// index.js
//
// documentation and unit testing of moLib
//

console.log('in index.js');

// global variable my in browser and node
//
globalThis.my = {};

// starting point for testing moLib database functions
//
async function test_start() {
  console.log('in test');

  my.fireb_config = 'jht9629';
  // my.fireb_config = 'jhtitp';
  my.dbase_rootPath = 'm0-@r-@w-';
  my.mo_app = 'mo-test';
  my.mo_room = 'm0-test';
  my.nameDevice = 'mo-test-device';
  if (!globalThis.window) my.nameDevice += '-node';

  await setup_dbase();

  my.dbase.update_item('item', { test_count: my.dbase.increment(1) });

  my.dbase.update_item('item', { test_step: 1 });

  setup_animationFrame();
}

async function setup_dbase() {
  //
  // await my.dbase.app_init(my);
  my.dbase = await mo_dbase_init(my);

  observe_item();

  observe_comment_store();

  console.log('setup_dbase done');
}

function observe_item() {
  my.dbase.app_observe('item', { observed_item });
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
  my.dbase.app_observe('comment_store', { observed_event });
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
        my.dbase.update_item('item', { test_step: my.dbase.increment(1) });
        break;
      case 2:
        my.dbase.update_item('item', { test_step: my.dbase.increment(1) });
        break;
      default:
        trim_comments();
        my.dbase.update_item('item', { test_step: 0 });
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
    await my.dbase.remove_key('comment_store', key);
  }
}

async function test_step1() {
  //
  console.log('test_step1');

  my.dbase.update_item('item', { num_test: 1959 });

  my.dbase.update_item('item', { num_test: my.dbase.increment(1) });

  let comment = 'love now';
  let name = 'nameX1';
  let uid = my.uid;
  let test_count = my.test_count;
  let date = new Date().toISOString();
  let entry = { test_count, name, comment, date, uid };

  let key = await my.dbase.add_key('comment_store', entry);
  console.log('added key', key);

  entry.comment = new Date().toISOString();
  entry.name = 'nameX2';
  let key2 = await my.dbase.add_key('comment_store', entry);
  console.log('added key2', key2);

  my.dbase.update_props({ test_prop: 'test_prop' });

  my.dbase.update_props({ test_num: my.dbase.increment(1) });

  my.dbase.info_update({ info_count: my.dbase.increment(1), item2: 'info-item2' });
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

test_start();
