// https://firebase.google.com/docs/storage/web/list-files#list_all_files
function fstorage_listAll(bucket) {
  // console.log('fstorage_listAll bucket', bucket);
  let { getStorage, ref, listAll } = fireb_.fstorage;
  bucket = bucket || my.dbase_rootPath;
  console.log('fstorage_listAll bucket', bucket);
  // Create a reference under which you want to list
  const listRef = ref(getStorage(), bucket);
  // console.log('listRef', listRef);
  // Find all the prefixes and items.
  listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
        // console.log('folderRef', folderRef);
        // console.log('folderRef.path', folderRef.path); // Defined
        // console.log('bucket', folderRef.bucket);
        console.log('prefix fullPath', folderRef.fullPath);
      });
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        // console.log('itemRef', itemRef);
        console.log('item fullPath', itemRef.fullPath);
      });
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      ui_error('fstorage_listAll error', error);
    });
}

// https://firebase.google.com/docs/storage/web/list-files#paginate_list_results
function fstorage_list(bucket) {
  console.log('fstorage_list bucket', bucket);
  let { getStorage, ref, list } = fireb_.fstorage;
  bucket = bucket || my.dbase_rootPath;
  // Create a reference under which you want to list
  const listRef = ref(getStorage(), bucket);
  console.log('listRef', listRef);
  // Find all the prefixes and items.
  list(listRef, { maxResults: 100 })
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
        // console.log('folderRef', folderRef);
        // console.log('folderRef.path', folderRef.path); // Defined
        // console.log('bucket', folderRef.bucket);
        console.log('prefix fullPath', folderRef.fullPath);
      });
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        // console.log('itemRef', itemRef);
        console.log('item fullPath', itemRef.fullPath);
      });
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      ui_error('fstorage_list error', error);
    });
}
