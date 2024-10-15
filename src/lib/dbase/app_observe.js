//
function dbase_app_observe({ observed_key, removed_key, observed_item, observed_event }, options) {
  // options = { app, tag, path }
  let tag = 'dbase_app_observe';
  let tagPath = '';
  if (!options) {
    options = {};
  } else if (typeof options === 'string') {
    options = { path: options };
    options.group = my.mo_group || 's0';
  }
  tag = options.tag || tag;
  // Setup listener for changes to firebase db device
  let path = `${my.dbase_rootPath}/${my.mo_app}/${my.mo_room}`;
  if (options.group) {
    path += `/a_group/${options.group}`;
  }
  if (options.path) {
    path += `/${options.path}`;
    tagPath = options.path;
  }
  ui_logv('dbase_app_observe options', options);
  ui_logv('dbase_app_observe path', path);
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
    let msg = `${tag} ${op} ${tagPath} `;
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
      my.a_group_item = value;
      if (value) {
        observed_item({ [key]: value });
      }
    }
    if (observed_event) {
      observed_event(op, key, value);
    }
  }

  function group_key() {
    let group = my && my.mo_group;
    if (!group) group = 's0';
    // broadcast group when has comma separated values
    if (group.indexOf(',') > -1) {
      // my.mo_group=s1,s2,... --> group=s0
      // Special group 's0' recieves all updates
      group = 's0';
    }
    return group;
  }
}
globalThis.dbase_app_observe = dbase_app_observe;

// issue dbase_update_props to group
function dbase_update_item(item, path) {
  // let group = my && my.mo_group;
  // if (!group) group = 's0';
  // // broadcast group when has comma separated values
  // if (group.indexOf(',') > -1) {
  //   // my.mo_group=s1,s2,... --> group=s0,s1,s2,...
  //   // Special group 's0' recieves all updates
  //   group = 's0,' + group;
  // }
  // let options = { group: group };
  // if (path) {
  //   options.path = path;
  // }
  dbase_update_props(item, dbase_default_options(path));
}
globalThis.dbase_update_item = dbase_update_item;

function dbase_default_options(path) {
  let group = my && my.mo_group;
  if (!group) group = 's0';
  // broadcast group when has comma separated values
  if (group.indexOf(',') > -1) {
    // my.mo_group=s1,s2,... --> group=s0,s1,s2,...
    // Special group 's0' recieves all updates
    group = 's0,' + group;
  }
  let options = { group: group };
  if (path) {
    options.path = path;
  }
  return options;
}
globalThis.dbase_default_options = dbase_default_options;

// issue dbase_update_props to group if my.mo_group present
function dbase_group_update(item) {
  let group = my && my.mo_group;
  if (group) {
    dbase_update_item(item);
  } else {
    dbase_update_props(item, { group: group });
  }
}
globalThis.dbase_group_update = dbase_group_update;

function dbase_group_observe(props, options) {
  let group = my && my.mo_group;
  if (group) {
    dbase_app_observe(props, options);
  } else {
    dbase_devices_observe(props, options);
  }
}
globalThis.dbase_group_observe = dbase_group_observe;

async function dbase_add_key(apath, value) {
  console.log('dbase_add_key apath', apath, 'value', value);
  let options = dbase_default_options(apath);
  let group = options.group;
  let prop = options.path;

  let { getRefPath, push, set } = fireb_.fbase;
  let path = `${my.dbase_rootPath}/${my.mo_app}/${my.mo_room}`;
  path += `/a_group/${group}/${prop}`;

  console.log('dbase_add_key path', path);
  let refPath = getRefPath(path);
  let nref = push(refPath);

  set(nref, value);

  return nref.key;
}
globalThis.dbase_add_key = dbase_add_key;

async function dbase_remove_key(apath, key) {
  console.log('dbase_remove_key apath', apath, 'key', key);
  let options = dbase_default_options(apath);
  let group = options.group;
  let prop = options.path;

  let { getRefPath, set } = fireb_.fbase;
  let path = `${my.dbase_rootPath}/${my.mo_app}/${my.mo_room}`;
  path += `/a_group/${group}/${prop}/${key}`;

  console.log('dbase_remove_key path', path);
  let refPath = getRefPath(path);

  return set(refPath, null);
}
globalThis.dbase_remove_key = dbase_remove_key;

// https://firebase.google.com/docs/database/web/lists-of-data#append_to_a_list_of_data
// push
// https://firebase.google.com/docs/reference/js/database
// export declare function push(parent: DatabaseReference, value?: unknown): ThenableReference;
// https://firebase.blog/posts/2015/02/the-2120-ways-to-ensure-unique_68
