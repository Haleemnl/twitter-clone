

const Dotenv = require('dotenv-webpack');

module.exports = function override(config, env) {
    // Add the dotenv-webpack plugin to the plugins array
    config.plugins = [
        ...config.plugins,
        new Dotenv()
    ];

    return config;
};
