//var shared_config = require('./karma_shared.conf'); //Общая конфигурация
//var bench_config = require('./karma_bench.conf');

var karma = require("karma");
var path = require('path');
//var karmaParseConfig = require('karma/lib/config').parseConfig; //Вот утилитка кармы для парсинга конфигурации!!!
//var mocha_config = karmaParseConfig( path.resolve('./karma_mocha.conf') , {} ); //Видимо, вместо пустого объекта можно было указать конфиг, накладывающийся на конфиг (уже где-то видел такой пример)

function runKarmaWithConfig(configFilePath){
    configFilePath = path.resolve(configFilePath);

    var server = new karma.Server( {configFile: configFilePath}, function(exitCode) {
        console.log('Karma has exited with ' + exitCode)
        process.exit(exitCode)
    });

    server.start();
}

runKarmaWithConfig('./karma_mocha.conf.js');