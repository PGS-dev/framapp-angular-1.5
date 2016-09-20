const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const config = require('./config');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: config.path.dist
    }
});
