var isBrowser = new Function('try {return this===window;}catch(e){ return false;}');

var isServerSideRenderEnabled = new Function('try {return this===process.browser;}catch(e){ return false;}');

var isNode = new Function('try {return this===global;}catch(e){return false;}');

var isSSR = isServerSideRenderEnabled();

if (isBrowser() || isSSR) {
  if (isSSR) {
    console.log('Enabling cdm-logger for server side rendering');
  }
  module.exports = require('./src/client.js');
} else if (isNode()) {
  module.exports = require('./src/server');
} else {
  console.log('Logger Error: Cannot determine whether the environment as browser or server');
}

