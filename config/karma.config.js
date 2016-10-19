const webpackTestConfig = require('./webpack.test');
const confs = require('./config');

module.exports = function (karma) {
    karma.set({
        basePath: confs.path.app,
        frameworks: ['jasmine'],
        files: [
            '../node_modules/angular/angular.js',
            '../node_modules/angularfire/dist/angularfire.js',
            '../node_modules/angular-ui-router/release/angular-ui-router.js',
            '../node_modules/angular-mocks/angular-mocks.js',
            '../app/components/*/index.js',
            '../app/pages/*/*/*/index.js',
            '../app/pages/*/index.js',
            '**/*.spec.js'
        ],
        exclude: [
            // '**/*.spec.js'
        ],
        preprocessors: {
            // add webpack as preprocessor
            '**/*.js': ['webpack', 'sourcemap']
        },
        webpack: webpackTestConfig,
        webpackServer: {noInfo: true},
        reporters: ['progress', 'mocha'],
        port: 9876,
        colors: true,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: 6e6
    });
};
