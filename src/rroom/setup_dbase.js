//

async function setup_dbase() {
  //
  my.imageQuality = 1;
  // my.imageQuality = 0.1;
  my.imageExt = '.jpg';

  my.maxPhotos = 4;

  my.fireb_config = 'jht9629';
  // my.fireb_config = 'jht1493';
  // my.fireb_config = 'jhtitp';

  my.mo_app = 'mo-rroom';
  my.mo_room = 'm0-rroom';
  my.mo_group = 's0';

  // my.nameDevice = '';
  my.query = get_url_params();
  if (my.query) {
    my.mo_room = my.query.room || my.mo_room;
    my.mo_group = my.query.group || my.mo_group;
  }

  my.dbase = await mo_dbase_init(my);
  console.log('setup_dbase my.dbase', my.dbase);

  my.photo_index = 0;

  observe_item(my);

  observe_photo_store();
}

function observe_item(my) {
  my.dbase.observe('item', { observed_item });
  function observed_item(item) {
    console.log('observed_item item', item);
    if (item.photo_index != undefined) {
      my.photo_index = item.photo_index;
    }
  }
}

function observe_photo_store() {
  my.photo_store = {};
  my.dbase.observe('photo_store', { observed_event });
  function observed_event(event, key, item) {
    console.log('observed_event ', event, key, item);
    switch (event) {
      case 'add':
      case 'change':
        item.key = key;
        my.photo_store[key] = item;
        break;
      case 'remove':
        delete my.photo_store[key];
        break;
    }
    my.photo_store_changed = 1;
  }
}

async function save_canvas_handler() {
  console.log('save_canvas_handler my.canvas', my.canvas);

  let layer = my.canvas;
  await add_photo(layer);

  my.photo_list = Object.values(my.photo_store);

  if (my.photo_list.length > my.maxPhotos) {
    // Remove old test photo
    let entry = my.photo_list[0];
    photo_list_remove_entry(entry);
  }
}

async function add_photo(layer) {
  console.log('add_photo my', my);
  // console.log('add_photo my.dbase', my.dbase);

  // { name, index, uid, date }
  let entry = photo_list_entry(my.photo_index + 1);

  console.log('add_photo entry', entry);

  let key = await my.dbase.add_key('photo_store', entry);
  entry.key = key;

  let path = photo_path_entry(entry);
  my.dbase.update_item('photo_store/' + key, { path });

  let imageQuality = my.imageQuality;
  try {
    //
    await my.dbase.fstorage_upload({ path, layer, imageQuality });

    photo_index_increment(my);
    //
  } catch (err) {
    console.log('take_action err', err);
  }
}

//

function photo_list_entry(index) {
  let name = index.toString().padStart(3, '0');
  let uid = my.uid;
  let createdAt = new Date().toISOString();
  // let ext = my.imageExt;
  return { name, index, uid, createdAt };
}

function photo_path_entry(entry) {
  if (entry.path) return entry.path;
  return `${entry.uid}/${entry.name}_${entry.key}${my.imageExt}`;
}

function photo_index_increment() {
  my.dbase.update_item('item', { photo_index: my.dbase.increment(1) });
}

async function photo_list_remove_entry(entry) {
  console.log('photo_list_remove_entry entry', entry);

  // delete getting issued twice -- try to avoid repeated delete
  if (!my.delete_photos) {
    my.delete_photos = {};
  }
  let path = photo_path_entry(entry);
  if (my.delete_photos[path]) {
    console.log('photo_list_remove_entry repeated delete path', path);
    return;
  }
  my.delete_photos[path] = 1;
  try {
    await my.dbase.fstorage_remove({ path });
    // remove_img(entry.key);
    await my.dbase.remove_key('photo_store', entry.key);
  } catch (err) {
    console.log('photo_list_remove_entry err', err);
  }
}

//
