//

// dbase.date_s;
// dbase.remote

//
async function dbase_app_init(my) {
  //
  globalThis.my = my;

  let config = fireb_.init(my.fireb_config);
  ui_log('configVersion', config.configVersion);
  ui_log('config.projectId', config.projectId);
  ui_log('configLabel', config.configLabel);
  ui_log('room', my.mo_room);

  ui_logv('dbase_app_init globalThis', globalThis);
  ui_logv('dbase_app_init my.mo_app', my.mo_app, 'my.mo_room', my.mo_room, 'my.mo_group', my.mo_group);

  dbase_report_status({ msg: 'Starting...' });

  let { signInAnonymously, auth } = fireb_;

  await signInAnonymously(auth);
  // .then(() => {
  my.uid = auth.currentUser.uid;
  ui_log('dbase_app_init my.uid', my.uid);

  dbase_report_status({});

  dbase_site_observe();

  // Send initial ping
  dbase_update_props({}, { count: 1 });
}
globalThis.dbase_app_init = dbase_app_init;

// return array of devices, most recently active first
function dbase_site_devices(show) {
  if (!my.fireb_devices) {
    // console.log('no fireb_devices');
    return [];
  }
  let arr = Object.values(my.fireb_devices).sort((item1, item2) => {
    let date1 = item1.dbase.date_s;
    let date2 = item2.dbase.date_s;
    return date1.localeCompare(date2);
  });
  // Latest date first
  arr.reverse();
  if (show) {
    let lines = [];
    for (let item of arr) {
      let { uid } = item;
      let { date_s, visit_count, update_count, userAgent } = item.dbase;
      userAgent = userAgent.substring(8, 48);
      lines.push(date_s + ' visit_count ' + visit_count + ' update_count ' + update_count);
      lines.push(uid + ' ' + userAgent);
      // console.log('');
    }
    lines.push('dbase_site_devices n ' + arr.length);
    ui_log(lines.join('\n'));
  }
  // [ {
  //    index
  //    dbase {date_s: '2024-02-19T03:52:26.337Z', name_s: '', time: 0, time_s: '', update: Array(9), …}
  //    uid
  //    } ... ]
  //
  return arr;
}
globalThis.dbase_site_devices = dbase_site_devices;
