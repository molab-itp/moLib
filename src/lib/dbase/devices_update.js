//
//

import { mo_dbase } from './a_mo_dbase.js';
// mo_dbase.prototype.

//
// Send an update to all a_devices
//
// my.dbase.devices_update(deviceProps)
//
mo_dbase.prototype.devices_update = function (deviceProps) {
  //
  let my = this.my;
  if (!my.a_device_values) {
    ui_log('dbase_devices_update NO my.a_device_values', my.a_device_values);
    return;
  }
  let path = `${my.dbase_rootPath}/${my.mo_app}/${my.mo_room}`;
  let { getRefPath, update } = my.fireb_.fbase;
  let refPath = getRefPath(path);
  ui_verbose('dbase_update_props', path);

  let updates = {};
  for (let uid in my.a_device_values) {
    for (let prop in deviceProps) {
      let value = deviceProps[prop];
      let dpath = `a_device/${uid}/${prop}`;
      updates[dpath] = value;
    }
  }

  update(refPath, updates);
};

//
// throttle update to queue to time
//
// my.dbase.queue_update(props)
//
mo_dbase.prototype.queue_update = function (props) {
  //
  let my = this.my;
  if (!my.db_queue) {
    my.db_queue = {};
    my.db_queue_loop = new Anim({ time: 0.25, action: check_queue });
    my.db_queue_count = 0;
    my.db_queue_count_last = 0;
  }
  Object.assign(my.db_queue, props);
  my.db_queue_count++;
  function check_queue() {
    // console.log('check_queue db_queue_count_last', my.db_queue_count_last, my.db_queue_count);
    if (my.db_queue_count_last != my.db_queue_count) {
      my.db_queue_count_last = my.db_queue_count;

      this.update_props(my.db_queue);

      my.db_queue = {};
    }
  }
};

//
// Check for pending queue updates
//
// my.dbase.poll();
//
mo_dbase.prototype.poll = function () {
  let my = this.my;
  if (my.db_queue_loop) {
    my.db_queue_loop.step({ loop: 1 });
  }
};

//
// Return non-zero if any actions issued for device uid
//
// my.dbase.actions_issued(uid, { clear_action: 1})
// my.dbase.actions_issued(uid, actions, options)
//
mo_dbase.prototype.actions_issued = function (uid, actions, options) {
  // console.log('dbase_actions_issued uid', uid, 'actions', actions);
  let my = this.my;
  options = options || {};
  let actionSeen = 0;
  if (!my.db_last_actions_uid) my.db_last_actions_uid = {};
  let source;
  if (options.group) {
    source = my.a_group_item;
    if (!source) {
      ui_log('dbase_actions_issued uid', my.uid, 'no a_group_item', my.a_group_item);
      return 0;
    }
  } else {
    if (!my.a_device_values) {
      ui_log('dbase_actions_issued uid', my.uid, 'no a_device_values', my.a_device_values);
      return 0;
    }
    source = my.a_device_values[uid];
    if (!source) {
      ui_log('dbase_actions_issued uid', uid, 'no device source', source);
      return 0;
    }
  }
  let last_actions = my.db_last_actions_uid[uid];
  if (!last_actions) {
    // For first view record only
    // detect action trigger on next change
    last_actions = {};
    my.db_last_actions_uid[uid] = last_actions;
    for (let act in actions) {
      last_actions[act] = source[act];
    }
    return 0;
  }
  for (let act in actions) {
    if (last_actions[act] != source[act]) {
      // console.log('dbase_actions_issued source act', source[act]);
      last_actions[act] = source[act];
      actionSeen++;
    }
  }
  return actionSeen;
};

//
// Issue actions to my device
//
// my.dbase.issue_actions( { clear_action: 1 }, { all: 1} )
//
mo_dbase.prototype.issue_actions = function (actions, options) {
  //
  if (!options) options = {};
  let nactions = {};
  for (let act in actions) {
    nactions[act] = this.increment(1);
  }
  if (options.all) {
    this.devices_update(nactions);
  } else {
    this.update_props(nactions, options);
  }
};

//
// Issue actions to all a_devices
//
// my.dbase.devices_issue_actions(actions, options)
//
mo_dbase.prototype.devices_issue_actions = function (actions, options) {
  //
  if (!options) options = {};
  let nactions = {};
  for (let act in actions) {
    nactions[act] = this.increment(1);
  }
  this.devices_update(nactions, options);
};

//
// 2024-moSalon/src/let-america-be/index.js
// dbase_issue_action('action_next');
//
// my.dbase.issue_action is complement by dbase_if_action
// my.dbase.issue_action(prop, path)
//
mo_dbase.prototype.issue_action = function (prop, path) {
  ui_log('dbase_issue_action', prop);
  this.update_item({ [prop]: my.dbase.increment(1) }, path);
};

//
// simpler version of my.dbase.devices_issue_actions
//
// use: node/lib/dbase.js | moSalon/vote
// my.dbase.if_action(item.action_rewind, 'action_rewind', my.rewind_action)
//
// my.dbase.if_action({ item, prop, actionFunc })
//
mo_dbase.prototype.if_action = function ({ item, prop, actionFunc }) {
  let my = this.my;
  let count = item[prop];
  if (count != null) {
    if (my[prop] && count != my[prop]) {
      // trigger action
      ui_log('triggering action', prop, 'old count', my[prop], 'new count', count);
      actionFunc();
    }
    my[prop] = count;
  }
};

//
