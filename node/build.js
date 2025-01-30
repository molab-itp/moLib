//
import { init } from './build_init.js';
import { build_ver_run } from './build_ver.js';
import { build_mode } from './build_mode.js';

import { join } from 'path';
import { readFileSync, existsSync } from 'fs';

let my = {};

function run() {
  init(my);

  get_build_vers(my);
  if (!my.incrementFlag) {
    my.next = my.current;
  }
  mlog('incrementFlag', my.incrementFlag);
  mlog('writeFlag', my.writeFlag);
  mlog('mode_dev', my.mode_dev);

  // retired -- replaced by test / importmap
  // if (my.libFlag) {
  //   build_mode(my);
  // }
  // source files that will have ?v=<buildnumber> updated
  build_ver_run(my);
}

function get_build_vers(my) {
  let buildnum_path = join(my.src_path, my.buildnum_path);
  let str = '0';
  if (existsSync(buildnum_path)) {
    str = readFileSync(buildnum_path, 'utf8');
  } else {
    mlog('read failed buildnum_path', buildnum_path);
  }
  my.current = parseFloat(str);
  my.next = my.current + 1;
}

export function mlog(...args) {
  if (my.quietFlag) return;
  console.log(...args);
}

run();
