//to run this config type in CLI: karma start karma_bench.conf.js

module.exports = function(config) {
    config.set({
        port: 9876,
        autoWatch: false,
        basePath: '',
        browsers: [
            'PhantomJS'
            //'Chrome'
        ],
        colors: true,
        concurrency: Infinity,
        logLevel: config.LOG_INFO,
        preprocessors: {},
        singleRun: true
    });
};