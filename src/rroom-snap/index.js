// index.js
//
// take periodic snap shot of firebase database and storage
//

console.log('in index.js');

let my = {};
let dbase;

// starting point
//
async function snap_start() {
  console.log('in snap_start');

  await setup_dbase();

  setup_animationFrame();
}

async function setup_dbase() {
  //
  my.fireb_config = 'jht9629';
  // my.fireb_config = 'jhtitp';

  my.mo_app = 'mo-rroom';
  my.mo_room = 'm0-rroom';
  my.mo_group = 's0';

  // my.mo_app = 'mo-test';
  // my.mo_room = 'm0-test';
  // my.nameDevice = 'mo-test-device';
  if (!globalThis.window) my.nameDevice += '-node';

  dbase = await mo_dbase_init(my);

  observe_item();

  observe_photo_store();

  // observe_devices();

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

function observe_photo_store() {
  //
  // mo-test / m0-test / a_group / s0 / comment_store
  //
  dbase.observe('photo_store', { observed_event });
  //
  my.comment_store = {};
  function observed_event(event, key, item) {
    // console.log('observed_event ', event, key, item);
    switch (event) {
      case 'add':
      case 'change':
        my.comment_store[key] = item;

        item.key = key;
        start_download(item);

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

snap_start();

// globalThis.my = my;

import axios from 'axios';
import { createWriteStream, existsSync as fs_existsSync } from 'fs';

async function downloadFile(url, outputPath) {
  const writer = createWriteStream(outputPath);

  const response = await axios({
    method: 'get',
    url: url,
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function start_download(item) {
  attempt_download(item, 2);
}

async function attempt_download(item, retryCount) {
  // console.log('attempt_download item', item);
  if (!item.path) return;
  if (!retryCount) {
    console.log('attempt_download retry failed item', item);
    return;
  }
  let url;
  let path = item.path;
  try {
    console.log('attempt_download url path', path);
    url = await dbase.fstorage_download_url({ path });
  } catch (err) {
    // console.log('attempt_download url err', err);
    console.log('attempt_download url err return');
    setTimeout(() => {
      attempt_download(item, retryCount - 1);
    }, 3000);
  }

  // console.log('test_download url', url);
  if (!url) return;

  // path yGt3ZocTRxWpZQu9bMymjI8zku32/001_-OI78nU3Ys1-VyJVmZTt.jpg
  //
  let outputPath = `../../../../2024-moSalon-Store/rroom/${item.uid}_${item.name}_${item.key}.jpg`;
  if (!fs_existsSync(outputPath)) {
    downloadFile(url, outputPath)
      .then(() => console.log('Downloaded path', path))
      .catch((err) => console.error('Download failed', err));
  } else {
    console.log('exists path', path);
  }
}
