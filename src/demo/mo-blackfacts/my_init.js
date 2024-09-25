function my_init() {
  // console.log('my_init');
  //
  my.fireb_config = 'jht9629';
  // my.fireb_config = 'jht1493';
  // my.fireb_config = 'jhtitp';
  my.dbase_rootPath = 'm0-@r-@w-';
  my.mo_app = 'mo-blackfacts';
  my.roomName = 'room0';
  // my.roomName = 'room1';
  my.blackfacts_index = -1;
  my.stepCount = 0;
  my.animTime = 7;
  my.nameDevice = 'device?v=7';
  my.pingTime = 1;

  // my.isRemote = window.innerHeight > window.innerWidth;
  my.isRemote = !params.qrcode;

  // idevice param renamed to group
  // however, still present in qr code
  my.idevice = params.idevice;
  console.log('my_init my.idevice', my.idevice);
  if (my.idevice) {
    my.group = 's' + my.idevice;
  }
  if (params.group) {
    my.group = params.group;
  }
  if (!my.group) {
    my.group = 's0';
  }
  console.log('my_init my.group', my.group);
  if (my.group) {
    id_title.innerHTML += ' (' + my.group + ')';
  }
  if (params.room) {
    my.roomName = params.room;
  }
}
