const path = require('path'); // Import the 'path' module


module.exports = function (webpackEnv) {

    return {

        resolve: {

            fallback: {

                path: require.resolve("path-browserify"),
                os: require.resolve('os-browserify/browser'),

                crypto: require.resolve("crypto-browserify"),

            }
        }
    }
}