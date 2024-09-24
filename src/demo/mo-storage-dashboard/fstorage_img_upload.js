// https://firebase.google.com/docs/storage/web/upload-files?authuser=0#upload_from_a_blob_or_file

function fstorage_img_upload() {
  // console.log('fstorage_img_upload');
  let count = my.count;
  my.layer.elt.toBlob(
    (blob) => {
      fstorage_img_upload_blob(blob, count);
    },
    my.imageType,
    my.imageQuality
  );
}

function fstorage_img_upload_blob(blob, count) {
  // console.log('fstorage_img_upload_blob', blob);
  let { getStorage, ref, uploadBytes } = fireb_.fstorage;
  // let path = `/-mo-1/${fireb_.auth.currentUser.uid}/000`;
  my.imagePath = next_imagePath(count);
  // ui_log('fstorage_img_upload_blob my.imagePath', my.imagePath);
  const storageRef = ref(getStorage(), my.imagePath);

  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, blob)
    .then((snapshot) => {
      // ui_log('snapshot.metadata.fullPath ' + snapshot.metadata.fullPath);
      // console.log('snapshot', snapshot);
      // console.log('Uploaded path', path);
      ui_log('upload ', my.imagePath);
    })
    .catch((error) => {
      // Handle any errors
      ui_error('fstorage_img_upload_blob error', error);
    });
}

function next_imagePath(count) {
  // console.log('next_imagePath');
  let str = (count + my.count_base + 1).toString().padStart(my.image_seq_pad, '0');
  return `${my.dbase_rootPath}/${my.clipsName}/${str}${my.imagExt}`;
}
