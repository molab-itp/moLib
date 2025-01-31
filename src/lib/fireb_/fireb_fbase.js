//
// Expose firebase api to non-import code p5js script.js
// via variable fireb_.xxxx
// fireb_.fbase.child
// ...

// console.log('fireb_fbase');

import {
  child,
  get,
  getDatabase,
  increment,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  onValue,
  push,
  ref,
  set,
  update, //
} from 'firebase/database';

function getRefPath(path) {
  return ref(getDatabase(), path);
}

export function fbase_init(my) {
  my.fireb.fbase = fbase;
  // fbase.getDatabase = function () {
  //   getDatabase(my.fireb.app);
  // };
  fbase.getRefPath = function (path) {
    return ref(getDatabase(my.fireb.app), path);
  };
}

export const fbase = {
  child,
  get,
  // getDatabase,
  getRefPath,
  increment,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  onValue,
  push,
  ref,
  set,
  update,
};

/* 

https://firebase.google.com/docs/database/web/start?hl=en&authuser=0

// !!@
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

*/

// -- History

// https://firebase.google.com/docs/database/web/read-and-write?hl=en&authuser=0#atomic_server-side_increments

// https://firebase.google.com/docs/database/web/read-and-write?hl=en&authuser=0

// Extracted to own file fireb_firebase.js and use
//  <script type="module" src="firebase.js"></script>
// to load from index.html
// This step was to verify that script module import works in p5js editor

// Initial version that does not use module import
// https://editor.p5js.org/jht1493/sketches/5LgILr8RF
// Firebase-createImg-board
// Display images from Firebase storage as a bill board
