//to run this config type in CLI: karma start karma_bench.conf.js

var shared_config = require('./karma_shared.conf'); //Общая конфигурация

module.exports = function(config) {
    shared_config(config); //Берём общую кофигурацию и дополняем... По ходу свойства верхнего уровня shared_conf заменяются целиком
    config.set({
        files: [
            'bench/**/*.bench.js'
        ],
        frameworks: [
            'benchmark'
        ],
        junitReporter: {
            outputDir: 'reports',
            outputFile: 'benchmark.xml'
        },
        reporters: [
            'benchmark',
            'junit'
        ]
    });
};