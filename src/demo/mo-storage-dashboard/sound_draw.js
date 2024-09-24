function sound_draw_init() {
  my.volhistory = [];
  my.lastMax = 0;
}

function sound_draw() {
  let vol;
  if (!my.soundEnable) {
    return;
  }
  if (my.amp) {
    vol = my.amp.getLevel();
  } else if (my.mic) {
    vol = my.mic.getLevel();
  } else {
    return;
  }
  // console.log('sound_draw vol', vol);
  my.volhistory.push(vol);
  strokeWeight(2);
  let colr = my.colors[my.colorIndex];
  stroke(colr);
  noFill();
  beginShape();
  let nowMax = 0;
  let nowMin = 1;
  let xline = frameCount % width;
  let yline = height;
  let nv = my.volhistory.length;
  let xoffset = 0;
  if (nv < width) {
    // sound wave starts from right edge
    xoffset = width - nv;
  }
  for (let i = 0; i < nv; i++) {
    let val = my.volhistory[i];
    let y = map(val, 0, my.lastMax, height, 0);
    if (Number.isNaN(y)) {
      // console.log('i', i, 'y', y, 'val', val, 'my.lastMax', my.lastMax);
      y = 0;
    }
    vertex(xoffset + i, y);
    if (val > my.lastMax) {
      my.lastMax = val;
    }
    if (val > nowMax) {
      nowMax = val;
    }
    // Skip of 0 index to avoid startup zero amplitude
    if (val < nowMin && i > 0) {
      nowMin = val;
      xline = i;
      yline = y;
      // console.log('xline', xline, 'yline', yline);
    }
  }
  my.lastMax = nowMax;
  endShape();
  if (my.volhistory.length > width) {
    my.volhistory.splice(0, 1);
  }
  let bcolr = my.colors[(my.colorIndex + 1) % my.colors.length];
  stroke(bcolr);
  stroke(255, 255, 0);
  line(0, yline, width, yline);
  line(xline, yline, xline, height);
  // console.log('xline', xline, 'yline', yline);
}

// https://editor.p5js.org/jht9629-nyu/sketches/pwLiHkndo
// mic graph
// graph the volume level of the mic
