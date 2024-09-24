//
function init_ui() {
  show_qrcode_top_right();
  if (params.playlist) {
    // id_message_pane.classList.add('hidden');
    id_dashboard.classList.add('hidden');
    qrcode_hide();
    id_bottom_message_pane.classList.add('hidden');
    id_player.style.height = '100%';
  } else {
    if (my.isRemote) {
      create_remote_view();
    } else {
      create_controlled_view();
    }
  }
  if (params.qrcode) {
    console.log('ui_init qrcode', params.qrcode);
    if (params.qrcode != '.') {
      id_qrcode_src.src = '../../qrcode/' + params.qrcode;
    }
    show_qrcode_top_right();
  }
  if (my.group) {
    id_group_report.innerHTML = my.group;
  }
  if (my.isRemote) {
    // toggle_365_panes();
  }
}

function create_remote_view() {
  // no qrcode, show dashboard
  //
  id_message_pane.classList.add('hidden');
  id_bottom_message_pane.classList.add('hidden');
  qrcode_hide();
  create_index_buttons();
}

function create_controlled_view() {
  // show qrcode, hide dashboard
  //
  id_dashboard.classList.add('hidden');
  show_qrcode_top_right();
}

function show_qrcode_top_right() {
  qrcode_show();

  position_top();
  position_bottom();
}

function position_top() {
  let margin = 10;
  id_message_pane.style.left = 2 * margin + 'px';
}

function position_bottom() {
  // console.log('position_bottom');
  let qrwidth = 0.215;
  let margin = 10;
  id_qrcode_src.width = Math.floor(window.innerWidth * qrwidth);
  let x = window.innerWidth - id_qrcode.clientWidth - margin;
  let y = window.innerHeight - id_qrcode.clientHeight - margin;
  id_qrcode.style.left = x + 'px';
  id_qrcode.style.top = y + 'px';
  id_bottom_message_pane.style.left = 2 * margin + 'px';
  id_bottom_message_pane.style.top = y + 'px';

  position_video();
  // dbase_positionStatus();
}

function create_index_buttons() {
  // let button_host = window.id_button_host;
  // let button_host = id_dashboard;
  let button_host = id_index_button_container;
  for (let index = 0; index < nfacts; index++) {
    let label = ('' + (index + 1)).padStart(3, '0');
    const elt = document.createElement('button');
    elt.innerHTML = label;
    button_host.appendChild(elt);
    elt.addEventListener('click', function () {
      // toggle_365_panes();
      update_blackfacts_index_dbase(index);
      position_video();
    });
  }
  // setTimeout(position_video, 1000);
  // position_video();
}

function position_video() {
  rt = button_container_rt();
  id_player.style.top = rt.bottom + 'px';
}

function button_container_rt() {
  rt = id_index_button_container.getBoundingClientRect();
  console.log('button_container_rt rt.bottom', rt.bottom);
  return rt;
}

function qrcode_hide() {
  id_qrcode.classList.add('hidden');
}

function qrcode_show() {
  id_qrcode.classList.remove('hidden');
}
