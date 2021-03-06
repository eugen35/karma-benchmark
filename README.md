# Пример использования:
 * Travis CI
 * Jenkins (интеграция с test stack через junit (результаты модульных тестов) и cobertura (Istanbul coverage)) - правда настроечного файла нет (там же настройка через веб-интерфейс)
 * Mocha, KarmaJS + Istanbul
 * Chai (и chai-as-promised) + SinonJS 
 * BenchmarkJS
 * WebDriver (официальное API)
 * бэджей.

ВНИМАНИЕ! Пример не дописан, дописывать пока не собираюсь.

##Причины прекращения работы над данным проектом
Пример недописан, т.к. появилась пробема со сборкой серверного кода для тестов. Файл server_code_n_test_builder.ss.js всё равно не работает без webpack.
А с webpack, возможно, не будет работать т.к. скрипты общего пользования (серверного и клиентского) я не обернул в module.exports,
т.к. если оберну, - они не собрутся на клиентской стороне.  

##Пример использования бэджей
[![dependencies](http://img.shields.io/npm/v/karma-benchmark.svg)](http://img.shields.io/npm/v/karma-benchmark)
[![Travis build status](https://travis-ci.org/eugen35/karma-benchmark.svg?branch=master)](https://travis-ci.org/eugen35/karma-benchmark)
[![Coverage Status](https://coveralls.io/repos/github/eugen35/karma-benchmark/badge.svg?branch=master)](https://coveralls.io/github/eugen35/karma-benchmark?branch=master)
[![dependencies](https://david-dm.org/eugen35/karma-benchmark.png)](https://david-dm.org/eugen35/karma-benchmark)
[![dependencies](https://david-dm.org/eugen35/karma-benchmark/dev-status.svg)](https://david-dm.org/eugen35/karma-benchmark#info=devDependencies)
Собственно, сам код бэджей ниже:
``````
[![dependencies](http://img.shields.io/npm/v/karma-benchmark.svg)](http://img.shields.io/npm/v/karma-benchmark)
[![Travis build status](https://travis-ci.org/eugen35/karma-benchmark.svg?branch=master)](https://travis-ci.org/eugen35/karma-benchmark)
[![Coverage Status](https://coveralls.io/repos/github/eugen35/karma-benchmark/badge.svg?branch=master)](https://coveralls.io/github/eugen35/karma-benchmark?branch=master)
[![dependencies](https://david-dm.org/eugen35/karma-benchmark.png)](https://david-dm.org/eugen35/karma-benchmark)
[![dependencies](https://david-dm.org/eugen35/karma-benchmark/dev-status.svg)](https://david-dm.org/eugen35/karma-benchmark#info=devDependencies)
``````
Бэдж с версией npmjs в данном случае выводит версию не данного репозитория (т.к. данный репозиторий не опубликован в качестве пакета npmjs), а одноимённого пакета с npmjs.

Бэдж с coverage не работает, т.к. TravisCI даёт ТОЛЬКО бэдж о состоянии build (правда, не смотрел его настройки интеграции)...
А данный бэдж с coverage может заработать только за счёт использования сервиса coverall (или аналогичного), который ещё нужно настроить (с первого захода у меня не получилось).

ИТОГО: множество бэджей работает только за счёт интеграции с множеством сервисов, их предоставляющих.

Довольно большой их список можно увидеть на сайте http://shields.io/. И кстати, на нём есть api, чтобы можно было создавать свои бэджи.

##СУФФИКСЫ КЛИЕНТСКИХ И СЕРВЕРНЫХ СКРИПТОВ И ТЕСТОВ
Существуют следующие виды скриптов JS:
1. Те, используются только на клиенте; 
2. Те, используются только на сервере;
3. Те, которые используются там и там.
Клиентские тесты нужно запускать для 1 и 2 вида скриптов, серверные тесты нужно запускать для 2 и 3.
Пихать код в папки /server_code /client_code и /client_server_code кажется не разумным, поскольку это возможно нарушит структуру папок.
То же касается и создания аналогичных папок для тестов.

Поэтому предлагается использовать суффиксы к *.js файлам (как к файлам с кодом, так и к файлам с тестами):

* Если скрипт только клиентский, то *.cs.js (от client side);
* Если скрипт только серверный, то *.ss.js (от server side);
* Если и серверный и клиентский, - то суффикс не используется: *.js.

##О безголовом тестировании через KarmaJS и Webdriver на базе Jenkins  
У меня виснет jenkins постоянно так, что его забросил. Это связано, ВОЗМОЖНО?, с визуальным интрефейсом браузеров. Нужно попробовать безголовое тестирование.
Возможно, тогда и vnc и hfce на серваке постоянной интеграции не нужно поднимать (а может их и с обычными браузерами не нужно было поднимать - может как раз с ними vnc плагин jenkins конфликтует).
Почему бы и не безголовое? Пусть разработчики на своих машинах тестят во всех браузерах, а безголовое на сервере постоянной интеграции будет уже последним рубежом.
Что касается webdriver, то тут на этапе создания тестов или автоматизации нужно использовать драйвер реального браузера (чтобы визуально видеть, то ли делает тест).
Но после создания теста, лучше безголово (будет быстрее и мешаться не будет).

##Название каталога тестов
Хотел назвать его spec. Но вот странная штука, mocha при этом как-то глючит. Так если каталог назван spec, 
то команда "istanbul cover node_modules\mocha\bin\_mocha **spec**\\\*.ss.js" приводит  к восприятю istanbulом для оценки покрытия не только тестов в качестве функций, 
но и самих этих функций. При этом процент покрытия не меняется, а вот число функций в отчёте истанбул больше, чем в папке с тестируемыми функциями.
Если же написать istanbul cover node_modules\mocha\bin\_mocha **test**\\\*.ss.js, то в отчёте истанбул видно что функций ровно столько, сколько есть.



##TODOS (если бы продолжал работать над этим)
* <!-- @todo --> Прикрепить cobertura к отчёту coverage (как минимум по линии тестов KarmaJS).
* <!-- @todo --> Настроить экспорт в xml для jenkins отчёта coverage по запуску серверной mocha.... И пусть html-report хранится в папке reports/coverage, а не просто в coverage 
* <!-- @todo --> Сделать конфиг KarmaJS (с ватчем), чтобы прогонять тесты при изменении кода... Чисто пока кодируешь, удобно же. Но перед коммитов в dev - ОБЯЗАТЕЛЬНО прогонять по полному набору тестов по команде test.
* <!-- @todo --> Если для трэвиса и дженкинса сделаем безголовый тест (это, кстати, можно через переменные окружения реализовать!!!), то и конфиги под это подправить (т.е. три вида конфигов тестов, - 1) на лету во время кодирования, 2) полный перед мержем в dev, 3) на сервере CI перед мержем в продакшн)
* <!-- @todo --> Если для трэвиса и дженкинса сделаем безголовый тест (это, кстати, можно через переменные окружения реализовать!!!), то и конфиги под это подправить (т.е. три вида конфигов тестов, - 1) на лету во время кодирования, 2) полный перед мержем в dev, 3) на сервере CI перед мержем в продакшн)

## Отдалённые TODOS (если бы продолжал работать над этим)
* <!-- @todo --> Настроить какую-либо интеграцию для получения бэджа по coverage.
* <!-- @todo --> Настроить какую-либо интеграцию для оценки качества кода (потруднее, чем с coverage сделать, судя по загугливанию).
* <!-- @todo --> Подцепить всё это к jenkins (дополнительная интеграция)
* <!-- @todo --> Автоматизировать - если build на travisCI или jenkins делается, то автоматически выливать его на продакшн (Для travisCI это можно сделать за счёт использования after_success опции в .travis.yml)
* <!-- @todo [очень отдалённое] [не факт, что нужно] --> Сделать coverage для интеграционных тестов, похоже, что это возможно, - http://www.noamsh.com/javascript-integration-tests-coverage-with-istanbul/. Пока попробовал просто так: istanbul cover node_modules\mocha\bin\_mocha -t 10000  test/*.js || exit 0 (положив туда end-to-end тест), - но Истанбул пишет No coverage information was collected, exit without writing coverage information 
* <!-- @todo --> Научиться запускать benchmark.js для нескольких тестовых файлов  на nodejs - требует сборки их в один файл
* <!-- @todo --> Библиотечка spectrophotometer имеет зависимость pasync, которая имеет зависимостью microtime, которую трудно установить - там вроде требуется node-gyp (по крайней мере TravisCI падает, кстати, вдруг jenkins из-за чего-то подобного падал?). Избавиться от него можно, начав использовать классический стиль benchmarkjs. Но тогда и на клиенте бы использовать классический вид. Пока убрал spectrophotometer из зависимостей, чтоб билды не падали (но ничего другого из данного туду не сделал)



