const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    entry : {},
    output: {},
    devtool: 'inline-source-map'
});