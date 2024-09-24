//
import { init } from './build_init.js';
import { build_ver_run } from './build_ver.js';

let my = {};

init(my);

// source files that will have ?v=<buildnumber> updated

build_ver_run(my);
