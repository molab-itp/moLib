function draw_number(num, opt) {
  let { layer, right, bottom, frac, noid, captionSize } = opt;

  if (!captionSize) captionSize = my.captionSize;
  layer.textSize(captionSize);

  let str = num.toString();
  if (frac) {
    str = convert_timeFrac(num, frac);
  }
  str = str.padStart(my.image_seq_pad, '0');

  let tw = layer.textWidth(str);
  let th = layer.textLeading();
  let ta = layer.textAscent();

  let x = 0;
  let y = 0;
  if (right) {
    x = layer.width - tw;
  } else {
    tw = layer.width / 2;
    if (!noid) {
      str += ' ' + my.uid.substring(0, 7);
    }
  }
  if (bottom) {
    y = layer.height - th;
  }
  let colr = my.colors[my.colorIndex];
  if (right) colr = 0;
  layer.fill(colr);
  layer.rect(x, y, tw, th);
  layer.fill(255);
  layer.text(str, x, y + ta);
}

function convert_timeFrac(num, frac) {
  let sec = int(num);
  let fsec = int((num - sec) * 100);
  let min = int(sec / 60);
  sec -= min * 60;
  let hours = int(min / 60);
  min -= hours * 60;
  // console.log('hours', hours, 'min', min, 'sec', sec, 'num', num);
  let str = '.' + fsec.toString().padStart(2, 0);
  if (sec != 0 || min != 0 || hours != 0) {
    str = sec.toString().padStart(2, '0') + str;
  }
  if (min != 0 || hours != 0) {
    str = min.toString().padStart(2, '0') + ':' + str;
  }
  if (hours != 0) {
    str = hours.toString().padStart(2, '0') + ':' + str;
  }
  return str;
}

function draw_dateISOString(layer) {
  let today = new Date();
  let str = today.toISOString();

  let capSize = my.captionSize;
  layer.textSize(capSize);

  let tw = layer.textWidth(str);
  let th = layer.textLeading();
  let ta = layer.textAscent();

  let x = layer.width - tw;
  let y = layer.height - th;

  // let colr = my.colors[my.colorIndex];
  layer.fill(0);
  layer.rect(x, y, tw, th);
  layer.fill(255);
  layer.text(str, x, y + ta);
}

function draw_millis(layer) {
  let fmt = { layer, right: 1, small: 1, frac: 2 };
  draw_number(millis() / 1000, fmt);
}

// !!@ Always black on transparent
// function draw_count() {
//   let fmt = { layer: my.canvas, bottom: 1, noid: 1, captionSize: height / 30 };
//   draw_number(my.count, fmt);
//   // textSize(100);
// }

// !!@ fill and rect not drawn
//  layer = my.canvas
// !!@ layer vs. canvas inconsistency

// Draw frame count or file name of last download to canvas
//
function draw_count() {
  // let layer = my.canvas;
  let layer = p5.instance;
  let str = frame_count_str();
  let captionSize = height / my.captionScale;
  layer.textSize(captionSize);
  let tw = layer.textWidth(str);
  let th = layer.textLeading();
  let ta = layer.textAscent();
  // Draw center top
  // let x = 0;
  let x = width / 2 - tw / 2;
  // let y = height - th;
  let y = 0;
  layer.strokeWeight(0);
  if (my.record) {
    layer.fill(255, 0, 0);
  } else {
    layer.fill(0);
  }
  layer.rect(x, y, tw, th);
  layer.fill(255);
  layer.text(str, x, y + ta);
}

// function draw_count() {
//   let str = frame_count_str();
//   let captionSize = height / my.captionScale;
//   textSize(captionSize);
//   let tw = textWidth(str);
//   let th = textLeading();
//   let ta = textAscent();
//   // let x = 0;
//   let x = width / 2 - tw / 2;
//   // let y = height - th;
//   let y = 0;
//   fill(0);
//   rect(x, y, tw, th);
//   fill(255);
//   text(str, x, y + ta);
// }

function frame_count_str() {
  let num = my.count + my.count_base + 1;
  let str = num.toString();
  str = str.padStart(my.image_seq_pad, '0');
  // Select the file name from the last download
  if (my.replay) {
    if (my.lastDownloadPath) {
      let parts = my.lastDownloadPath.split('/');
      if (parts.length > 0) {
        str = parts[parts.length - 1];
      }
    } else {
      str = '';
    }
  }
  return str;
}
