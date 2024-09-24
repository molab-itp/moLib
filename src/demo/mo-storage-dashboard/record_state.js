function record_state_update(newState) {
  init_counts();
  my.record_preroll = newState;
  let now = millis() / 1000;
  my.recordCountDown.next_secs = now + my.recordCountDown.max;
  if (newState) {
    my.replay = 0;
    my.replayChk.checked(0);
  } else {
    my.recordCountDown.next_secs = 0;
  }
}

function record_state_track() {
  //
  let m = height * 0.08;
  strokeWeight(m);
  if (my.record && !my.record_preroll) {
    stroke(255, 0, 0);
    noFill();
    rect(0, 0, width, height);
  }
  if (!my.record_preroll) {
    return;
  }
  let now = millis() / 1000;
  if (now > my.recordCountDown.next_secs) {
    my.record_preroll = 0;
    return;
  }
  let cnt = my.recordCountDown.next_secs - now;
  cnt = int(cnt + 1);
  let str = cnt + '';
  let h = width * 1.4;
  textSize(h);
  let w = textSize(str);
  // console.log('w', w);
  // let x = (width - w) * 1;
  let x = width * 0.1;
  let y = height * 0.8;
  strokeWeight(m * 0.025);
  stroke(255, 0, 0);
  fill(255, 0, 0);
  text(cnt, x, y);
}
