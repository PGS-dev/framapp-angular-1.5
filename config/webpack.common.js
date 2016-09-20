const webpack = require('webpack');
const config = require('./config');
const glob = require('glob-all');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: config.path.app,
    entry: {
        app: './index',
        styles: glob.sync([
            "../node_modules/angular-material/angular-material.css",
            "./**/**.scss"
        ], {cwd: config.path.app})

    },
    output: {
        filename: config.jsBundleName,
        publicPath: '/'
    },
    resolve: {
        modulesDirectories: [
            'node_modules'
        ],
        root: config.path.root,
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['ng-annotate', 'babel']},
            {test: /\.json$/, loader: 'json'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract(['css'])},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract(['css', 'sass'])},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
            {test: /\.gif/, loader: "url-loader?limit=10000&mimetype=image/gif"},
            {test: /\.jpg/, loader: "url-loader?limit=10000&mimetype=image/jpg"},
            {test: /\.ico/, loader: "url-loader?limit=10000&mimetype=image/ico"},
            {test: /\.png/, loader: "url-loader?limit=10000&mimetype=image/png"}
        ]
    },
    plugins: [
        new CleanWebpackPlugin([config.dirs.public,config.dirs.dist], {
            root: config.path.root,
            verbose: true
        }),
        new ExtractTextPlugin(config.cssBundleName),
        new HtmlWebpackPlugin({
            title: 'FramApp - Angular 1.5',
            entry: 'index.ejs',
            template: 'index.ejs'
        }),
        new CopyWebpackPlugin([
            {
                from: 'assets'
            }
        ])

    ]
};
