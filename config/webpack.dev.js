const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const config = require('./config');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: config.path.public
    },
    devServer: {
        contentBase: config.path.public,
        outputPath: config.path.public,
        historyApiFallback: true,
        compress: true,
        inline: true,
        port: config.port,
        stats: {colors: true}
    },
    plugins: [
        new OpenBrowserPlugin({
            url: `http://localhost:${config.port}`
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});
