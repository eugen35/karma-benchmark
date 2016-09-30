//to run this config type in CLI: karma start karma_bench.conf.js

module.exports = function(config) {
    config.set({
        autoWatch: false,
        basePath: '',
        browsers: [
            'PhantomJS'
            //'Chrome'
        ],
        colors: true,
        concurrency: Infinity,
        exclude: [],
        logLevel: config.LOG_INFO,
        port: 9876,
        preprocessors: {},
        singleRun: true
    });
};