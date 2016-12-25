# logger
logger is a isomorphic logging library for node.js and browser.

```js
import logger from 'cdm-logger';
logger.info('hi');
logger.error('in error');
logger.debug('in debug')
```

It is a wrapper to [bynyan](https://github.com/trentm/node-bunyan/).



## Webpack
To use with webpack, we need to make webpack ignore optional files:
Create "empty-shim.js":
```javascript
// This is an empty shim for things that should be not be included in webpack
```
Now tell webpack to use this file for
[optional dependencies](https://webpack.github.io/docs/configuration.html#resolve-alias)
in your "webpack.config.js":
```
resolve: {
    // These shims are needed for bunyan
    alias: {
        'dtrace-provider': '/path/to/shim/empty_shim.js',
        fs: '/path/to/shim/empty_shim.js',
        'safe-json-stringify': '/path/to/shim/empty_shim.js',
        mv: '/path/to/shim/empty_shim.js',
        'source-map-support': '/path/to/shim/empty_shim.js'
    }
}
```
Now webpack builds, ignoring these optional dependencies via shimming in an empty JS file!
