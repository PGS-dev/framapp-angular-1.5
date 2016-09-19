const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');
const config = require('./config');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: config.path.dist
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new webpack.optimize.DedupePlugin()
    ]
});