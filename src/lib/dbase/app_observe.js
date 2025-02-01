//
//

import { mo_dbase } from './a_mo_dbase.js';
// mo_dbase.prototype.

//
// black-enter/black_setup_dbase.js
//
// my.dbase.app_observe({ observed_item }, 'meta');
// my.dbase.app_observe({ observed_event }, 'comment_store');
//
mo_dbase.prototype.app_observe = function ({ observed_key, removed_key, observed_item, observed_event }, options) {
  // options = { app, tag, path }
  let my = this.my;
  let tag = 'dbase_app_observe';
  let tagPath = '';
  if (!options) {
    options = {};
  } else if (typeof options === 'string') {
    options = { path: options };
    options.group = this.mo_group || 's0';
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
  ui_verbose('dbase_app_observe options', options);
  ui_verbose('dbase_app_observe path', path);
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
      this.a_group_item = value;
      if (value != undefined) {
        observed_item({ [key]: value });
      }
    }
    if (observed_event) {
      observed_event(op, key, value);
    }
  }
};

//
// issue dbase_update_props to group
// my.dbase.update_item(item, path)
//
mo_dbase.prototype.update_item = function (item, path) {
  let options = this.default_options(path);
  this.update_props(item, options);
};

mo_dbase.prototype.default_options = function (path) {
  let my = this.my;
  let group = my.mo_group;
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
};

//
// issue dbase_update_props to group if my.mo_group present
// my.dbase.group_update(item)
//
mo_dbase.prototype.group_update = function (item) {
  let my = this.my;
  let group = my && my.mo_group;
  if (group) {
    this.update_item(item);
  } else {
    this.update_props(item, { group: group });
  }
};

//
// my.dbase.group_observe(props, options)
//
mo_dbase.prototype.group_observe = function (props, options) {
  let my = this.my;
  let group = my && my.mo_group;
  if (group) {
    this.app_observe(props, options);
  } else {
    this.devices_observe(props, options);
  }
};

//
// my.dbase.group_observe(props, options)
//
mo_dbase.prototype.add_key = async function (apath, value) {
  ui_log('dbase_add_key apath', apath, 'value', value);
  let my = this.my;
  let options = this.default_options(apath);
  let group = options.group;
  let prop = options.path;

  let { getRefPath, push, set } = fireb_.fbase;
  let path = `${my.dbase_rootPath}/${my.mo_app}/${my.mo_room}`;
  path += `/a_group/${group}/${prop}`;

  ui_log('dbase_add_key path', path);
  let refPath = getRefPath(path);
  let nref = push(refPath);

  set(nref, value);

  return nref.key;
};

//
// my.dbase.remove_key(apath, key)
//
mo_dbase.prototype.remove_key = async function (apath, key) {
  ui_log('dbase_remove_key apath', apath, 'key', key);
  let my = this.my;
  let options = dbase_default_options(apath);
  let group = options.group;
  let prop = options.path;

  let { getRefPath, set } = fireb_.fbase;
  let path = `${my.dbase_rootPath}/${my.mo_app}/${my.mo_room}`;
  path += `/a_group/${group}/${prop}/${key}`;

  ui_log('dbase_remove_key path', path);
  let refPath = getRefPath(path);

  return set(refPath, null);
};

// https://firebase.google.com/docs/database/web/lists-of-data#append_to_a_list_of_data
// push
// https://firebase.google.com/docs/reference/js/database
// export declare function push(parent: DatabaseReference, value?: unknown): ThenableReference;
// https://firebase.blog/posts/2015/02/the-2120-ways-to-ensure-unique_68
