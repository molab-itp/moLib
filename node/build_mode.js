//
import { readFileSync } from 'fs';
import { join } from 'path';

import { enum_files } from './enum_files.js';
import { writeSourceFile } from './build_ver.js';
import { mlog } from './build.js';

// Select import for build mode
//
// //} from 'firebase/app'; //@prod
// } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'; //@dev

export function build_mode(my) {
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
