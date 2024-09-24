//

let my = {};

// console.log('BlackFacts index.js');

document.addEventListener('DOMContentLoaded', document_loaded);
// console.log('addEventListener document_loaded');

window.addEventListener('resize', position_bottom);

function document_loaded() {
  // console.log('document_loaded');

  my_init();

  init_ui();

  dbase_app_init({ completed: app_init_completed });

  // Sometimes in non-remote description does not appear
  setTimeout(update_blackfacts_num_ui, 1000);
}

function app_init_completed() {
  //
  dbase_app_observe({ observed_item });

  my.animLoop = new Anim({ target: my, time: my.animTime });

  if (my.isRemote) {
    my.pingLoop = new Anim({ target: my, time: my.pingTime, action: pingAction });
  }

  setup_animationFrame();

  function observed_item(item) {
    let index = item.index;
    if (index != null && index != my.blackfacts_index) {
      update_blackfacts_index(index);
    }
    let echo_delay = item.echo_delay;
    if (echo_delay != null && my.echo_delay != echo_delay) {
      my.echo_delay = echo_delay;
      video_play_index(my.blackfacts_index);
    }
  }
}

function update_blackfacts_index_dbase(index) {
  ui_log('update_blackfacts_index_dbase index', index, 'my.group', my.group);
  dbase_update_item({ index });
}

function pingAction() {
  let portrait = my.isRemote ? 1 : 0;
  let group = my.group;
  dbase_site_updates({ portrait, group });
}

function update_blackfacts_index(newValue) {
  console.log('update_blackfacts_index newValue', newValue, my.blackfacts_index);
  my.blackfacts_index = newValue;

  update_blackfacts_num_ui();

  video_play_index(my.blackfacts_index);
}

function update_blackfacts_num_ui() {
  // url title param will be displayed in animationFrame_callback
  if (params.title) {
    return;
  }
  let index = my.blackfacts_index;
  let entry = dateFactForIndex(index);
  if (!entry) {
    console.log('update_blackfacts_num_ui no entry index', index);
    return;
  }
  //
  let description = entry.description;
  let periodIndex = description.indexOf('Narrated by BlackFacts.com');
  if (periodIndex >= 0) {
    description = description.substring(0, periodIndex);
  }
  // console.log('update_blackfacts_num_ui description', description);
  let msg = '#' + (index + 1) + ' ' + description;
  show_message_id(msg);
}

function show_message_id(msg) {
  id_blackfacts_num.innerHTML = msg;
  id_message_text.innerHTML = id_blackfacts_num.innerHTML = msg;
}

function mo_blackfacts_qccode_value(newValue) {
  // console.log('mo_blackfacts_qccode_value newValue', newValue);
  my.blackfacts_qrcode = newValue;
}

function ui_log(...args) {
  console.log(...args);
}

function ui_error(...args) {
  ui_log(...args);
  alert(...args);
}
