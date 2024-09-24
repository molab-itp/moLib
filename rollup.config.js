// rollup.config.js

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/lib/a_lib.js', // Entry point of your library
  output: [
    {
      file: 'dist/moLib.cjs.js',
      format: 'cjs', // CommonJS for Node.js
      sourcemap: true,
    },
    {
      file: 'dist/moLib.esm.js',
      format: 'es', // ES Module for modern bundlers
      sourcemap: true,
    },
    {
      file: 'dist/moLib.umd.js',
      format: 'umd', // UMD for browsers and Node.js
      name: 'moLib_', // Global variable name when used in browsers
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Resolve dependencies from node_modules
    commonjs(), // Convert CommonJS modules to ES6
    terser(), // Minify the output for production
  ],
};

// !!@ must be at top level
// https://firebase.google.com/docs/web/module-bundling?authuser=0&hl=en#using_firebase_with_rollup
