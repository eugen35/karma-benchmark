//to run this config type in CLI: karma start karma_bench.conf.js
//Данная конфигурация сравнивает производительность одинаковых функций в браузере (клиентский js). Т.е. она не проверяет те файлы, которые имеют вид *.ss.js (серверная часть)

var shared_config = require('./karma_shared.conf'); //Общая конфигурация

module.exports = function(config) {
    shared_config(config); //Берём общую кофигурацию и дополняем... По ходу свойства верхнего уровня shared_conf заменяются целиком.
    // например, если здесь указать reporters: ['benchmark'], репортер junit, указанный в shared_conf, затрётся.
    // То же самое будет если здесь указать junitReporter: {outputFile: 'benchmark.xml'}, - junitReporter: {outputDir: 'reports'}, указанный в shared_conf, затрётся.
    config.set({
        files: [
            'src/**/*.js',
            'bench/**/*.js' //тесты производительности
        ],
        exclude:[
            'src/**/*.ss.js', //Исключаем из проверки файлы js, которые планируется запускать только на сервере... Зачем нам проверять их производительность в браузерах?
            'bench/**/*.ss.js' //Исключаем из проверки тесты серверного js
        ],
        frameworks: [
            'benchmark'
        ],
        reporters: [
            'benchmark',
            'junit'
        ],
        junitReporter: {
            outputDir: 'reports',
            outputFile: 'benchmark.xml'
        }
    });
};