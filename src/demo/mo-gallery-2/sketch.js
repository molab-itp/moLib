// https://editor.p5js.org/jht9629-nyu/sketches/FHDOjD2fW
// Firebase createImg-slide-show
// Display images from Firebase storage as a slide show using createImg

// storage key for list of images
let storeKey = 'mo-1/gallery-@r-';
let nitems;
let updateCount = 0;
let a_img = [];
let a_index = 0;

function setup() {
  // createCanvas(400, 100);
  noCanvas();
  // console.log('app', fireb_.app);

  // Setup listener for changes to firebase db
  // fireb_ is initialized by fireb_firebase.js
  let galleryRef = fireb_.ref(fireb_.database, storeKey);
  fireb_.onValue(galleryRef, (snapshot) => {
    const data = snapshot.val();
    console.log('galleryRef data', data);
    received_gallery(data);
  });
}

// mouse press will pause slide show

function draw() {
  if (frameCount % 120 == 0 && a_img.length > 0 && !mouseIsPressed) {
    // index of previous image
    let oindex = a_index % a_img.length;
    // advance index of current image
    a_index = (a_index + 1) % a_img.length;
    let img = a_img[a_index];
    if (!img) return;
    // Show this image and hide the previous one
    img.style('display:inline');
    if (oindex != a_index) {
      img = a_img[oindex];
      img.style('display:none');
    }
  }
}

function received_gallery(data) {
  a_img = [];
  let div = ui_div_empty('igallery');
  if (!data) data = {};
  nitems = Object.keys(data).length;
  updateCount += 1;
  // Display in reverse order to see new additions first
  let arr = Object.values(data).reverse();
  for (val of arr) {
    // console.log('val', val);
    // let img = createImg( 'https://p5js.org/assets/img/asterisk-01.png', 'the p5 magenta asterisk' );
    let path = val.mediaPathFullRez || val.mediaPath;
    let img = createImg(path, val.authorEmail);
    div.child(img);
    a_img.push(img);
    // All images start out hidden
    img.style('display:none;width:100%');
  }
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

// https://editor.p5js.org/jht1493/sketches/sM0Hl8r8N
// Firebase createImg-slide-show
