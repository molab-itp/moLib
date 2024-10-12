//
function dbase_app_observe({ observed_key, removed_key, observed_item, observed_event }, options) {
  // options = { app, tag, path }
  let mo_app = my.mo_app;
  let tag = 'dbase_app_observe';
  if (options) {
    mo_app = options.app || mo_app;
    tag = options.tag || tag;
  }
  // Setup listener for changes to firebase db device
  let path = `${my.dbase_rootPath}/${mo_app}/${my.mo_room}`;
  if (options?.path) {
    path += '/' + options.path;
  }
  if (observed_item) {
    path += '/a_group';
  }
  let { getRefPath, onChildAdded, onChildChanged, onChildRemoved } = fireb_.fbase;
  let refPath = getRefPath(path);

  onChildAdded(refPath, (data) => {
    receivedDeviceKey('add', data);
  });

  onChildChanged(refPath, (data) => {
    // console.log('Changed', data);
    receivedDeviceKey('change', data);
  });

  // for examples/photo-booth no remove seen
  //
  onChildRemoved(refPath, (data) => {
    receivedDeviceKey('remove', data, { remove: 1 });
  });

  // op = added | changed | removed
  //
  function receivedDeviceKey(op, data, remove) {
    let msg = tag + ' ' + op;
    let key = data.key;
    let value = data.val();
    // ui_log(msg, key, 'n=', Object.keys(val).length);
    ui_log(msg, 'key', key, 'value', value);
    if (remove) {
      if (removed_key) {
        removed_key(key, value);
      }
      if (observed_event) {
        observed_event(op, key, value);
      }
      return;
    }
    if (observed_key) {
      observed_key(key, value);
    }
    if (observed_item) {
      let group = group_key();
      if (group == key) {
        my.a_group_item = value;
        if (value) {
          observed_item(value);
        }
      }
    }
    if (observed_event) {
      observed_event(op, key, value);
    }
  }

  function group_key() {
    let group = my && my.group;
    if (!group) group = 's0';
    // broadcast group when has comma separated values
    if (group.indexOf(',') > -1) {
      // my.group=s1,s2,... --> group=s0
      // Special group 's0' recieves all updates
      group = 's0';
    }
    return group;
  }
}
globalThis.dbase_app_observe = dbase_app_observe;

// issue dbase_update_props to group
function dbase_update_item(item) {
  let group = my && my.group;
  if (!group) group = 's0';
  // broadcast group when has comma separated values
  if (group.indexOf(',') > -1) {
    // my.group=s1,s2,... --> group=s0,s1,s2,...
    // Special group 's0' recieves all updates
    group = 's0,' + group;
  }
  dbase_update_props(item, { group: group });
}
globalThis.dbase_update_item = dbase_update_item;

// issue dbase_update_props to group if my.group present
function dbase_group_update(item) {
  let group = my && my.group;
  if (group) {
    dbase_update_item(item);
  } else {
    dbase_update_props(item, { group: group });
  }
}
globalThis.dbase_group_update = dbase_group_update;

function dbase_group_observe(props, options) {
  let group = my && my.group;
  if (group) {
    dbase_app_observe(props, options);
  } else {
    dbase_devices_observe(props, options);
  }
}
globalThis.dbase_group_observe = dbase_group_observe;

function dbase_add_key(apath) {
  let { getRefPath, push } = fireb_.fbase;
  let path = `${my.dbase_rootPath}/${my.mo_app}/${my.mo_room}/${apath}`;
  let refPath = getRefPath(path);
  return push(refPath);
}
globalThis.dbase_add_key = dbase_add_key;

// https://firebase.google.com/docs/database/web/lists-of-data#append_to_a_list_of_data
