//

// console.log('BlackFacts action.js');

id_dashboard.addEventListener('click', dashboard_action);

id_button_next.addEventListener('click', next_action);
id_button_previous.addEventListener('click', previous_action);
id_button_play.addEventListener('click', play_action);
id_button_pause.addEventListener('click', pause_action);
id_button_rewind.addEventListener('click', rewind_action);
id_button_resume.addEventListener('click', resume_action);

// id_button_first.addEventListener('click', first_action);
// id_button_random.addEventListener('click', random_action)
// id_checkbox_play_clip.addEventListener('click', play_clip_action);
// id_checkbox_qrcode.addEventListener('click', checkbox_qrcode_action);

id_button_toggle_buttons.addEventListener('click', toggle_buttons_action);
// id_button_library.addEventListener('click', library_action);

id_qrcode.addEventListener('click', qrcode_click_action);

// id_button_echo_delay_0.addEventListener('click', echo_delay_0_action);
// id_button_echo_delay_n.addEventListener('click', echo_delay_n_action);

let a_target;

function dashboard_action(event) {
  console.log('dashboard_action');
  var target = event.target;
  // a_target = target;
  if (target == id_dashboard) {
    console.log('dashboard_action id_dashboard');
    player.playVideo();
    update_blackfacts_num_ui();
    toggle_buttons_action();
  } else {
    console.log('dashboard_action other');
  }
}

function echo_delay_0_action() {
  let group = my.group;
  dbase_update_props({ echo_delay: 0 }, { group: group });
}

function echo_delay_n_action() {
  let groups = my.group;
  if (!groups) groups = '';
  groups = groups.split(',');
  let delayStep = 2;
  let echo_delay = delayStep;
  for (let index = 0; index < groups.length; index++) {
    let group = groups[index];
    dbase_update_props({ echo_delay }, { group: group });
    echo_delay += delayStep;
  }
}

function qrcode_click_action() {
  toggleFullScreen();
}

function resume_action() {
  // allow_cloud_actions();
  window.location.reload();
}

function play_action() {
  hold_cloud_actions('Play');
  player.playVideo();
}

function pause_action() {
  hold_cloud_actions('Pause');
  player.pauseVideo();
}

function rewind_action() {
  hold_cloud_actions('Rewind');
  player.seekTo(0);
}

function library_action() {
  window.location.href = '../..';
}

// id_button_toggle_buttons
function toggle_buttons_action() {
  console.log('toggle_buttons_action');
  toggle_365_panes();
  // let vis = id_index_button_container.classList.contains('hidden');
  // id_button_toggle_buttons.innerHTML = vis ? 'Show 365' : 'Hide 365';
}

function toggle_365_panes() {
  id_index_button_container.classList.toggle('hidden');
  // id_player.classList.toggle('hidden');
  id_blackfacts_num.classList.toggle('hidden');
  id_message_text.classList.toggle('hidden');
}

function play_clip_action() {
  ui_log('play_clip_action id_checkbox_play_clip.checked', id_checkbox_play_clip.checked);
  my.playClip = id_checkbox_play_clip.checked;
  if (my.playClip) {
    my.animLoop.start();
    next_action();
  }
}

function first_action() {
  // ui_log('first_action');
  allow_cloud_actions();
  let index = 0;
  update_blackfacts_index_dbase(index);
}

function next_action() {
  ui_log('next_action');
  allow_cloud_actions();
  let index = (my.blackfacts_index + 1) % nfacts;
  update_blackfacts_index_dbase(index);
}

function video_ended_next_action() {
  if (my.echo_delay) {
    window.setTimeout(() => {
      next_action();
    }, my.echo_delay * 1000);
  } else {
    next_action();
  }
}

function previous_action() {
  // ui_log('previous_action');
  allow_cloud_actions();
  let index = (my.blackfacts_index - 1 + nfacts) % nfacts;
  update_blackfacts_index_dbase(index);
}

function random_action() {
  // ui_log('random_action');
  allow_cloud_actions();
  let index = Math.floor(Math.random() * nfacts);
  update_blackfacts_index_dbase(index);
}

// clear params to allow actions from cloud
function allow_cloud_actions() {
  params = {};
}

// set params to hold actions from cloud
function hold_cloud_actions(title) {
  console.log('hold_cloud_actions ');
  if (my.hold_index == null) {
    my.hold_index = my.blackfacts_index;
  }
  title += ' #' + (my.hold_index + 1);
  params = { playlist: '', title };
}

function stepAction() {
  // console.log('stepAction ');
  next_action();
  my.stepCount++;
}

//
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

// document.getElementById('example').innerHTML
// https://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-properties
// https://html.spec.whatwg.org/multipage/nav-history-apis.html#named-access-on-the-window-object

// https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
