// keys.js -- figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
    // production keys
    module.exports = require('./prod');
} else {
    // development keys
    module.exports = require('./dev');
}