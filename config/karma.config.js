const webpackTestConfig = require('./webpack.test');
const confs = require('./config');

module.exports = function (karma) {
    karma.set({
        basePath: confs.path.app,
        frameworks: ['jasmine'],
        files: [

            // '../node_modules/angular.js',
            // '../node_modules/angular-mocks.js',
            '../app/tests.webpack.js',
            '**/*.spec.js'
        ],
        exclude: [],
        preprocessors: {
            // add webpack as preprocessor
            '**/*.js': ['webpack', 'sourcemap']
        },
        webpack: webpackTestConfig,
        webpackServer: {noInfo: true},
        reporters: ['mocha'],
        port: 9876,
        colors: false,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: 6e6
    });
};
