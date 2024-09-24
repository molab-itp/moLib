function my_init() {
  //
  pixelDensity(1);

  // my.dbase_rootPath
  // my.dbase_rootPath = '-mo-storage-video-@w-';

  my.dbase_rootPath = '-mo-storage-dashboard-@w-';
  console.log('my.dbase_rootPath', my.dbase_rootPath);

  init_clipsName();

  if (my.png) {
    // png image type preserves white background
    my.imageType = 'image/png';
    my.imagExt = '.png';
  } else {
    // jpeg give black background
    my.imageType = 'image/jpeg';
    my.imagExt = '.jpg';
  }
  if (windowWidth < 600) {
    my.width = windowWidth;
    my.height = windowHeight;
  }
  if (my.vFlip) {
    let temp = my.width;
    my.width = my.height;
    my.height = temp;
  }

  // image are store in sequence
  // {my.dbase_rootPath}/clips/${nums}${my.imagExt}
  my.image_seq_pad = 3;

  init_layer();

  my.next_secs = millis() / 1000 + my.interval;

  init_counts();

  if (my.soundEnable) {
    sound_init();
  }

  my.img_download_log = 0;
}

function init_clipsName() {
  let today = new Date();
  let str = today.toISOString();
  clipsName_restore();
  my.clipsName += '/' + str.substring(0, 10);
}

function clipsName_restore() {
  let nclipsName = localStorage.getItem('clipsName');
  console.log('clipsName_restore nclipsName', nclipsName);
  if (!nclipsName) {
    return;
  }
  my.clipsName = nclipsName;
}

function clipsName_update() {
  console.log('clipsName_update my.clipsName', my.clipsName);
  let parts = my.clipsName.split('/');
  localStorage.setItem('clipsName', parts[0]);
}

function init_layer() {
  let w = int(my.width / my.rezScale);
  let h = int(my.height / my.rezScale);
  my.layer = createGraphics(w, h);
  my.vwidth = w;
  my.vheight = h;
  my.captionSize = my.layer.height / my.captionScale;
  my.layer.noStroke();

  my.replayLayer = createGraphics(my.width, my.height);
}

function init_counts() {
  my.count = 0;
}
