//to run this config type in CLI: karma start karma_mocha.conf.js

var shared_config = require('./karma_shared.conf'); //Общая конфигурация

module.exports = function(config) {

    shared_config(config); //Берём общую кофигурацию и дополняем... По ходу свойства верхнего уровня shared_conf заменяются целиком.
    // например, если здесь указать reporters: ['benchmark'], репортер junit, указанный в shared_conf, затрётся.
    // То же самое будет если здесь указать junitReporter: {outputFile: 'benchmark.xml'}, - junitReporter: {outputDir: 'reports'}, указанный в shared_conf, затрётся.

    config.set({
        port: 9877,
        files: [
            'spec/**/*.js'
        ],
        frameworks: [
            'mocha',
            'chai'
            //'chai-as-promised',
            //'chai-sinon'
        ],
        reporters: [
            'progress',
            'junit'
        ],
        junitReporter: {
            outputDir: 'reports',
            outputFile: 'mocha.xml'
        }
    });
};