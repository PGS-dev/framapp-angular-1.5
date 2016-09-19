const path = require('path');

module.exports = {
    path: {
        'app': path.resolve(__dirname, '../app'),
        'root': path.resolve(__dirname, '../'),
        'public': path.resolve(__dirname, '../public')
    },
    dirs: {
        'public': 'public',
        'dist': 'dist'
    },
    jsBundleName: '[name]-[hash].bundle.js',
    cssBundleName: '[name]-[hash].css'
};
