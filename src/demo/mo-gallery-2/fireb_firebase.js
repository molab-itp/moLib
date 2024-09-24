//
// Expose firebase api to non-import code p5js script.js
// via variable fireb_.xxxx
// fireb_.ref
// fireb_.database
// fireb_.onValue

// Documentation starting reference
// <!-- https://firebase.google.com/docs/web/alt-setup?authuser=0&hl=en -->

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

import { getDatabase, ref, child, get, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDLxi_fvCG2kzD2eJ4MxEZbOJ_GFSpIVe0',
  authDomain: 'molab-485f5.firebaseapp.com',
  databaseURL: 'https://molab-485f5-default-rtdb.firebaseio.com',
  projectId: 'molab-485f5',
  storageBucket: 'molab-485f5.appspot.com',
  messagingSenderId: '219508380677',
  appId: '1:219508380677:web:b5d846a150e7d60368b86c',
  measurementId: 'G-40F0BN8L7L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    console.log('signInAnonymously OK');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errorCode', errorCode);
    console.log('errorMessage', errorMessage);
  });

const database = getDatabase();
// console.log('database', database);

const dbRef = ref(getDatabase());
// get(child(dbRef, `mo-gallery-1`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log('snapshot', snapshot.val());
//     } else {
//       console.log('No data available');
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// https://firebase.google.com/docs/database/web/read-and-write?hl=en&authuser=0

// const galleryRef = ref( getDatabase(), 'mo-gallery-1');
// fireb_.galleryRef = galleryRef;
// onValue(galleryRef, (snapshot) => {
//   const data = snapshot.val();
//   console.log('galleryRef data', data);
// });

const fireb_ = {};
window.fireb_ = fireb_;
fireb_.app = app;
fireb_.auth = auth;
fireb_.database = database;
fireb_.dbRef = dbRef;
fireb_.ref = ref;
fireb_.onValue = onValue;

// History
// Extracted to own file fireb_firebase.js and use
//  <script type="module" src="firebase.js"></script>
// to load from index.html
// This step was to verify that script module import works in p5js editor

// Initial version that does not use module import
// https://editor.p5js.org/jht1493/sketches/5LgILr8RF
// Firebase-createImg-board
// Display images from Firebase storage as a bill board
