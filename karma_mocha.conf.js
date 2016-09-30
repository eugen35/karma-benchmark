//to run this config type in CLI: karma start karma_mocha.conf.js

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
        files: [
            'spec/**/*.js'
        ],
        frameworks: [
            'mocha',
            'chai'
            //'chai-as-promised',
            //'chai-sinon'
        ],
        junitReporter: {
            outputDir: 'reports',
            outputFile: 'mocha.xml'
        },
        logLevel: config.LOG_INFO,
        port: 9876,
        preprocessors: {},
        reporters: [
            'progress',
            'junit'
        ],
        singleRun: true
    });
};