module.exports = function(config) {
    config.set({
        autoWatch: false,
        basePath: '',
        browsers: [
            'PhantomJS',
            'Chrome'
        ],
        colors: true,
        concurrency: Infinity,
        exclude: [],
        files: [
            //'bench/**/*.bench.js',
            'spec/**/*.js'

        ],
        frameworks: [
            //'benchmark',
            'mocha',
            'chai',
            //'chai-as-promised',
            //'chai-sinon'
        ],
        junitReporter: {
            outputDir: 'reports',
            outputFile: 'benchmark.xml'
        },
        logLevel: config.LOG_INFO,
        port: 9876,
        preprocessors: {},
        reporters: [
            //'benchmark',
            'progress',
            'junit'
        ],
        singleRun: true
    });
};