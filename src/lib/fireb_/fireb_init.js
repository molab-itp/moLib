//
// Expose firebase api to non-import code p5js script.js
// via variable fireb_.xxxx
// fireb_.init
// fireb_.app
// fireb_.auth
// fireb_.signInAnonymously
//

// Documentation starting reference
//    https://firebase.google.com/docs/web/alt-setup?authuser=0&hl=en

// console.log('fireb_config');

import {
  initializeApp, //
} from 'firebase/app';

import {
  getAuth,
  signInAnonymously, //
} from 'firebase/auth';

// Your web app's Firebase configuration

// jht9629
const firebaseConfig_jht9629 = {
  apiKey: 'AIzaSyDLxi_fvCG2kzD2eJ4MxEZbOJ_GFSpIVe0',
  authDomain: 'molab-485f5.firebaseapp.com',
  databaseURL: 'https://molab-485f5-default-rtdb.firebaseio.com',
  projectId: 'molab-485f5',
  storageBucket: 'molab-485f5.appspot.com',
  messagingSenderId: '219508380677',
  appId: '1:219508380677:web:b5d846a150e7d60368b86c',
  measurementId: 'G-40F0BN8L7L',
};

// jht1493
const firebaseConfig_jht1493 = {
  apiKey: 'AIzaSyBl4dTlon41lMW1b3CgJ7LphBH_fi6RETo',
  authDomain: 'molab-2022.firebaseapp.com',
  databaseURL: 'https://molab-2022-default-rtdb.firebaseio.com',
  projectId: 'molab-2022',
  storageBucket: 'molab-2022.appspot.com',
  messagingSenderId: '1007268220063',
  appId: '1:1007268220063:web:a69f608f35ca3f8d9a26aa',
};

//   jhtitp
const firebaseConfig_jhtitp = {
  apiKey: 'AIzaSyBg2bnuULvLvkd6SOAEetErgNtyGsNIb8c',
  authDomain: 'jhtitp-2417a.firebaseapp.com',
  projectId: 'jhtitp-2417a',
  storageBucket: 'jhtitp-2417a.appspot.com',
  messagingSenderId: '523385422249',
  appId: '1:523385422249:web:52df2a4c0803b79c2a04b8',
};

let configs = {
  jht9629: firebaseConfig_jht9629,
  jht1493: firebaseConfig_jht1493,
  jhtitp: firebaseConfig_jhtitp,
};

function select_config(config) {
  // config is object or string key into configs
  let configLabel;
  let nconfig = config;
  if (typeof nconfig == 'string') {
    // console.log('fireb_config config string', config);
    configLabel = nconfig;
    nconfig = configs[config];
  }
  // if config object not found, default to firebaseConfig_jht9629
  nconfig = nconfig || firebaseConfig_jht9629;
  nconfig.configLabel = configLabel;
  nconfig.configVersion = '?v=104';
  // console.log('fireb_config config', config);
  // console.log('fireb_config config.projectId', config.projectId);

  return nconfig;
}

import { fbase_init } from './fireb_fbase.js';
import { fstorage_init } from './fireb_fstorage.js';

export function fireb_init(my, config) {
  let nconfig = select_config(config);
  let fireb_ = {
    signInAnonymously,
  };
  fireb_.app = initializeApp(nconfig);
  fireb_.auth = getAuth(fireb_.app);
  my.fireb_ = fireb_;

  fbase_init(my);
  fstorage_init(my);

  return nconfig;
}

// https://firebase.google.com/docs/projects/api-keys
/*

https://firebase.google.com/docs/auth/web/start

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

*/
