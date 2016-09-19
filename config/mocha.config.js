import config from 'config';

module.exports = {
    entry: 'mocha!'+config.path.app+'/app/index.js', // in order to ignore built-in modules like path, fs, etc.
    output: {
        path: __dirname,
        filename: 'bundle.js'
    }
};