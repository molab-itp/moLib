// import pkg from 'fs-extra';
// const { readFileSync, existsSync, writeFileSync } = pkg;
// import { readFileSync, existsSync, writeFileSync } from 'fs-extra/esm';
import { readFileSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';

import { enum_files } from './enum_files.js';

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

let my_;

function mlog(...args) {
  if (my_.quietFlag) return;
  console.log(...args);
}

// build_ver_run(buildnum_path, build_ver, src_path, buildnum_files);
// build_ver_run(my);

// export function build_ver_run(src_path, buildnum_path, build_ver, buildnum_files) {
export function build_ver_run(my) {
  //
  my_ = my;
  let { src_path, buildnum_path, buildnum_files } = my;

  get_build_vers(my);
  if (!my.incrementFlag) {
    my.next = my.current;
  }

  mlog('incrementFlag', my.incrementFlag);
  mlog('writeFlag', my.writeFlag);
  mlog('mode_dev', my.mode_dev);

  process_mode_tag(my);

  // const ver_from_str = '\\?v=1';
  const ver_from_str = '\\?v=\\d+';
  const ver_to_str = '?v=' + my.next;
  const ver_replace = new RegExp(ver_from_str, 'g');

  let nfiles = enum_files(src_path, buildnum_files);
  // console.log('nfiles', nfiles);
  mlog('nfiles', nfiles.length);
  let writeCount = 0;
  let skipCount = 0;
  for (let afile of nfiles) {
    // skip directory enteries
    if (!afile) {
      skipCount++;
      continue;
    }
    // only modify text files js | html | md
    //
    if (!(afile.endsWith('.js') || afile.endsWith('.html') || afile.endsWith('.md'))) {
      // console.log('build_ver_run skipping afile', afile);
      skipCount++;
      continue;
    }
    // console.log('build_ver_run afile', afile);
    const fpath = join(src_path, afile);
    let str = readFileSync(fpath, 'utf8');
    if (!str) {
      console.log('read failed fpath', fpath);
      continue;
    }

    str = str.replace(ver_replace, ver_to_str);

    if (my.writeFlag) {
      // writeBuildFile(src_path, afile, str);
      writeSourceFile(src_path, afile, str);
      writeCount++;
    }
  }
  if (my.writeFlag) {
    // writeSrcBuildFile(src_path, buildnum_path, build_ver.next + '');
    writeSourceFile(src_path, buildnum_path, my.next + '');
    writeCount++;
  }
  mlog('writeCount', writeCount, 'skipCount', skipCount, 'next', my.next);
}

function writeSourceFile(src_path, afile, str) {
  const apath = join(src_path, afile);
  writeFileSync(apath, str);
}

// function to support writing to separate build destination
//
// export function writeBuildFile(src_path, afile, str) {
//   const buildpath = join(src_path, '../build', afile);
//   writeFileSync(buildpath, str);
// }

// export function writeSrcBuildFile(src_path, afile, str) {
//   const apath = join(src_path, afile);
//   const buildpath = join(src_path, '../build', afile);
//   writeFileSync(apath, str);
//   writeFileSync(buildpath, str);
// }

function process_mode_tag(my) {
  //
  let { src_path, mode_files } = my;

  let comment_prod = comment_endtag_re('prod');
  let uncomment_prod = uncomment_endtag_re('prod');
  let comment_dev = comment_endtag_re('dev');
  let uncomment_dev = uncomment_endtag_re('dev');
  let comment;
  let uncomment;
  if (my.mode_dev) {
    // --dev
    comment = comment_prod;
    uncomment = uncomment_dev;
  } else {
    // --prod
    comment = comment_dev;
    uncomment = uncomment_prod;
  }
  let nfiles = enum_files(src_path, mode_files);
  // console.log('nfiles', nfiles);
  mlog('nfiles', nfiles.length);
  let writeCount = 0;
  let skipCount = 0;
  for (let afile of nfiles) {
    // skip directory enteries
    if (!afile) {
      skipCount++;
      continue;
    }
    // only modify text files js | html | md
    //
    if (!(afile.endsWith('.js') || afile.endsWith('.html') || afile.endsWith('.md'))) {
      // console.log('build_ver_run skipping afile', afile);
      skipCount++;
      continue;
    }
    // console.log('process_mode_tag afile', afile);
    const fpath = join(src_path, afile);
    let str = readFileSync(fpath, 'utf8');
    if (!str) {
      console.log('mode read failed fpath', fpath);
      continue;
    }

    let nstr = str.replace(comment, '//$1');
    nstr = nstr.replace(uncomment, '$1');
    // console.log('str == nstr', str == nstr);

    if (my.writeFlag) {
      // writeBuildFile(src_path, afile, str);
      writeSourceFile(src_path, afile, nstr);
      writeCount++;
    }
  }
  mlog('mode writeCount', writeCount, 'skipCount', skipCount, 'next', my.next);
}

// regular expression to insert characters '//'
// at the begining of a line that end with characters '@//${tag}'
// only if line does not begin with '//'
//
function comment_endtag_re(tag) {
  return new RegExp(`^(?!\\/\\/)(.*\\/\\/@${tag})\$`, 'gm');
}

// >> https://chatgpt.com/c/66f27c60-3b3c-8002-b8c5-09b695f63676
// regular expression to remove characters '//'
// at the begining of a line that end with characters '@//${tag}'
//
function uncomment_endtag_re(tag) {
  return new RegExp(`^\\/\\/(.*\\/\\/@${tag})\$`, 'gm');
}
