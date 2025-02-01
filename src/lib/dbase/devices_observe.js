//
//

import { mo_dbase } from './a_mo_dbase.js';
// mo_dbase.prototype.

//
// my.dbase.devices_observe({ observed_key, removed_key, observed_item, all });
//
mo_dbase.prototype.devices_observe = function ({ observed_key, removed_key, observed_item, all }) {
  let my = this.my;
  if (!my.a_device_values) my.a_device_values = {};
  // 'mo-paint/a_device' --> a_app
  this.app_observe(
    { observed_key: my_observed_key, removed_key: my_removed_key }, //
    { app: my.mo_app + '/a_app' }
  );
  // dbase_app_observe --> dbase_observe_devices
  //
  function my_observed_key(key, value) {
    // console.log('observed_key key', key, 'value', value);
    my.a_device_values[key] = value;
    build_devices(key, value);
  }
  function my_removed_key(key, value) {
    ui_log('removed_key key', key, 'value', value);
    delete my.a_device_values[key];
    build_devices(key, value, { removed: 1 });
  }
  // ?? can performance improved by knowing that only specific device is updated?
  // Collection list of active devices and keep current in sync
  //
  function build_devices(key, value, removed) {
    // console.log('build_devices key', key);
    //
    let siteDevices = this.site_devices();
    let devices = [];
    for (let index = 0; index < siteDevices.length; index++) {
      let sdevice = siteDevices[index];
      let uid = sdevice.uid;
      let device = my.a_device_values[uid];
      if (!device) {
        // console.log('build_devices no uid', uid);
        continue;
      }
      if (all || device_uid_isActive(uid)) {
        device.uid = uid;
        devices.push(device);
      }
    }
    my.a_devices = devices;
    if (!removed && observed_item && key == my.uid && value) {
      observed_item(value);
    }
    if (removed) {
      if (removed_key) removed_key(key, value);
    } else {
      if (observed_key) observed_key(key, value);
    }
  }
};

//
// let devices = my.dbase.a_devices();
//
mo_dbase.prototype.a_devices = function () {
  let my = this.my;
  if (!my.a_devices) my.a_devices = [];
  return my.a_devices;
};

//
// let device = my.dbase.a_device_for_uid(uid);
//
mo_dbase.prototype.a_device_for_uid = function (uid) {
  // console.log('dbase_a_device_for_uid uid', uid, my.a_device_values[uid]);
  let my = this.my;
  if (!my.a_device_values) my.a_device_values = {};
  return my.a_device_values[uid];
};
