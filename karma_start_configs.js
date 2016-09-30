//var shared_config = require('./karma_shared.conf'); //Общая конфигурация
//var bench_config = require('./karma_bench.conf');

var karma = require("karma");
var path = require('path');
//var karmaParseConfig = require('karma/lib/config').parseConfig; //Вот утилитка кармы для парсинга конфигурации!!!
//var mocha_config = karmaParseConfig( path.resolve('./karma_mocha.conf') , {} ); //Видимо, вместо пустого объекта можно было указать конфиг, накладывающийся на конфиг (уже где-то видел такой пример)

//@todo [Очень очень отдалённое] [Сомнительное] Возможно, следует попробовать запускать несколько серверов карма одновременно, а не последовательно как делаю это сейчас. Хотя попробовал (на PhantomJS) Не получается если оставлять один и тот же порт и если делать разные порты... До конца доводился только самый быстрый тест.. Может это ускорит производительность теста (а нужно ли?), но повысит нагрузку на сервер (ведь запустит несколько инстанций браузера)?
//Карму с разными конфигами можно запускать только через karma start, а не через karma run,
// т.к. последний вариант используется при смене кода тестов или источника, а не при смене конфигурации
function runKarmaWithConfig(configFilePath, callback){
    configFilePath = path.resolve(configFilePath);

    var server = new karma.Server( {configFile: configFilePath}, callback);

    server.start();
}


runKarmaWithConfig('./karma_mocha.conf.js', function(){
    runKarmaWithConfig('./karma_bench.conf.js', function(exitCode) {
        console.log('Karma has exited with ' + exitCode)
        process.exit(exitCode)
    });
});




//runKarmaWithConfig('./karma_bench.conf.js');


