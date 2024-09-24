function fstorage_img_download() {
  // console.log('fstorage_img_download ');
  let path = next_imagePath(my.count);
  // my.lastDownloadPath = null;
  // ui_log('fstorage_img_download next_imagePath ' + path);
  let { getStorage, ref, getDownloadURL } = fireb_.fstorage;
  getDownloadURL(ref(getStorage(), path))
    .then((url) => {
      // `url` is the download URL for '1.jpeg'
      // ui_log('fstorage_img_download url', url);

      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
        // ui_log('fstorage_img_download blob ' + blob);
        renderBlobToCanvas(blob);
        my.lastDownloadPath = path;
        if (my.img_download_log) {
          ui_log('download ' + path);
        }
      };
      xhr.open('GET', url);
      xhr.send();

      // Or inserted into an <img> element
      // let img = createImg(url, 'img test');
      // img.setAttribute('src', url);
    })
    .catch((error) => {
      // Handle any errors
      ui_error('fstorage_getDownloadURL error', error);
      my.replayLayer.fill(0);
      my.replayLayer.rect(0, 0, width, height);
    });
}

// https://stackoverflow.com/questions/38004917/how-to-render-a-blob-on-a-canvas-element
// HTMLCanvasElement.prototype.renderImage = function(blob) {

function renderBlobToCanvas(blob) {
  // let elt = my.canvas.elt;
  // let ctx = elt.getContext('2d');
  // let ctx = my.canvas.drawingContext;
  let ctx = my.replayLayer.drawingContext;
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0, width, height);
    URL.revokeObjectURL(img.src);
  };
  img.src = URL.createObjectURL(blob);
}
