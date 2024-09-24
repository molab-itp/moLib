//

function init_ui() {
  // createButton('Shout Up').mousePressed(playIndexUpAction);
  // createButton('Shout Down').mousePressed(playIndexDownAction);
  // createButton('Reset').mousePressed(playIndexFirst_action);
  createButton('Next').mousePressed(playIndexUpAction);
  // createSpan(' playIndex ');
  my.playIndex_span = createSpan(my.playIndex);

  create_my_iframe();

  // Move the iframe below all the ui elements
  let body_elt = document.querySelector('body');
  let other_elt = my.iframe_element.elt;
  body_elt.insertBefore(other_elt, null);
}

function create_my_iframe() {
  my.iframe_element = createElement('iframe');
  my.iframe_element.elt.src = my.playList[my.playIndex];
  my.iframe_element.elt.width = windowWidth;
  my.iframe_element.elt.height = windowHeight;
}

function position_qrcode() {
  // console.log('position_bottom');
  let qrwidth = 0.215;
  let margin = 10;
  id_qrcode_src.width = Math.floor(window.innerWidth * qrwidth);
  let x = window.innerWidth - id_qrcode.clientWidth - margin;
  let y = window.innerHeight - id_qrcode.clientHeight - margin;
  id_qrcode.style.left = x + 'px';
  id_qrcode.style.top = y + 'px';
  // id_bottom_message_pane.style.left = 2 * margin + 'px';
  // id_bottom_message_pane.style.top = y + 'px';
}

function qrcode_hide() {
  id_qrcode.classList.add('hidden');
}

function qrcode_show() {
  id_qrcode.classList.remove('hidden');
}
