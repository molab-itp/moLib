// https://editor.p5js.org/jht1493/sketches/5LgILr8RF
// Firebase-createImg-board
// Display images from Firebase storage as a billboard using createImg

// https://mobilelabclass-itp.github.io/p5moLibrary/p5js_demo/createImg-board/
// https://mobilelabclass-itp.github.io/p5moLibrary/p5js_demo/createImg-board/?gallery=ims-web
// https://mobilelabclass-itp.github.io/p5moLibrary/p5js_demo/createImg-board/?gallery=web

let a_version = 'v9 ';
let galleryKey = 'mo-1/gallery-@r-';
// let galleryKey = 'mo-gallery-ims-web';
let nitems = 0;
let updateCount = 0;
let doScroll = false;
let rdata; // Firebase object results from server. key is id
let rarr; // Array of items from server
let rwidth = 1920; // dimensions for image element
let rheight = 1080;
let scrollLimit = 0;
let doSplat = 0;
let debug = 0;

let shuffleBtn;
let fullScreenBtn;
let toggleScrollBtn;
let splatBtn;

function setup() {
  noCanvas();
  // console.log('app', fireb_.app);
  if (debug) {
    rwidth = rwidth / 4;
    rheight = rheight / 4;
    scrollLimit = 2;
    doScroll = 1;
  }
  check_url_param();

  // Setup listner for changes to firebase db
  let galleryRef = fireb_.ref(fireb_.database, galleryKey);
  fireb_.onValue(galleryRef, (snapshot) => {
    const data = snapshot.val();
    console.log('galleryRef data', data);
    received_gallery(data);
  });

  shuffleBtn = createButton('Shuffle').mousePressed(() => {
    //console.log('Shuffle');
    received_gallery(rdata, { doShuffle: 1 });
  });
  shuffleBtn.style('font-size:42px');

  fullScreenBtn = createButton('Full Screen').mousePressed(() => {
    ui_toggleFullScreen();
    ui_remove_all();
  });
  fullScreenBtn.style('font-size:42px');

  toggleScrollBtn = createButton('Scroll').mousePressed(() => {
    doScroll = !doScroll;
    console.log('doScroll', doScroll);
    if (doScroll) {
      ui_toggleFullScreen();
      ui_remove_all();
    }
    // window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  });
  toggleScrollBtn.style('font-size:42px');

  splatBtn = createButton('Splat').mousePressed(() => {
    console.log('splatBtn', doSplat);
    doSplat = !doSplat;
    received_gallery(rdata);
  });
  splatBtn.style('font-size:42px');

  ui_init_update();
}

function draw() {
  // console.log('draw');
  if (doScroll) {
    // window.scrollBy({ top: window.scrollY + 1, behavior: 'smooth' });
    window.scrollBy(0, 1);
    let nlimit = scrollLimit || rarr.length;
    if (window.scrollY > (nlimit + 1) * rheight) {
      window.scrollTo(0, 0);
    }
  }
}

function received_gallery(data, opts) {
  window.scrollTo(0, 0);
  let div = ui_div_empty('igallery');
  if (!data) {
    return;
  }
  rdata = data;
  updateCount += 1;

  // for (key in data) {
  //   console.log('key', key);
  //   let val = data[key];

  // Display in reverse order to see new additions first
  rarr = Object.values(data).reverse();
  if (opts && opts.doShuffle) {
    rarr = shuffle(rarr);
  }
  nitems = rarr.length;

  for (val of rarr) {
    // console.log('received_gallery val', val);
    // let img = createImg( 'https://p5js.org/assets/img/asterisk-01.png', 'the p5 magenta asterisk' );
    // select full resolution media if available
    //
    // let path = val.mediaPathFullRez ?? val.mediaPath;
    let path = val.mediaPathFullRez || val.mediaPath;
    let img = createImg(path, val.authorEmail);
    div.child(img);

    // avoid backquote for rasberry pi browser
    // img.style(`width: ${rwidth}px;`);
    let iwidth = rwidth;
    if (doSplat) {
      iwidth = random(100, 400);
    }
    img.style('width: ' + iwidth + 'px;');

    ui_init_update();
  }
}

function ui_remove_all() {
  shuffleBtn.remove();
  fullScreenBtn.remove();
  toggleScrollBtn.remove();
  splatBtn.remove();
}

function ui_init_update() {
  ui_span('date', a_version + formatDate());
  ui_span('updateCount', ' updateCount:' + updateCount);
  ui_span('nitems', ' nitems:' + nitems);
}

function formatDate() {
  // return '';
  return new Date().toISOString();
}

function ui_div_empty(id) {
  let div = select('#' + id);
  // console.log('ui_device_selection div', div);
  if (!div) {
    div = createDiv().id(id);
  } else {
    let children = div.child();
    for (let index = children.length - 1; index >= 0; index--) {
      let elm = children[index];
      elm.remove();
    }
  }
  return div;
}

function ui_span(id, html) {
  let span = select('#' + id);
  if (document.fullscreenElement) {
    if (span) {
      span.remove();
    }
    return;
  }
  if (!span) {
    span = createSpan().id(id);
  }
  span.html(html);
}

function ui_toggleFullScreen() {
  if (!document.documentElement.requestFullscreen) {
    console.log('NO document.documentElement.requestFullscreen');
    return;
  }
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// let galleryKey = 'mo-gallery-web';
// let galleryKey = 'mo-gallery-ims-web';

function check_url_param() {
  let query = window.location.search;
  console.log('query', query);
  if (query.length < 1) return;
  let params = params_query(query);
  let ngallery = params['gallery'];
  if (ngallery) {
    // mo-gallery-web
    // rasberry pie does not like back quote
    // galleryKey = `mo-gallery-${ngallery}-web`;
    // galleryKey = ngallery;
    galleryKey = 'mo-gallery-' + ngallery;
  }
  console.log('galleryKey', galleryKey);
}

// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
function params_query(query) {
  // eg. query='abc=foo&def=%5Basf%5D&xyz=5'
  // params={abc: "foo", def: "[asf]", xyz: "5"}
  const urlParams = new URLSearchParams(query);
  const params = Object.fromEntries(urlParams);
  return params;
}
