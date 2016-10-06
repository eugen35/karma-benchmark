//var Benchmark = require('benchmark');
//var suite = Benchmark.Suite;
//var benchmark = Benchmark.Suite.benchmark;

var spectrophotometer = require('spectrophotometer');
//var suite = spectrophotometer.benchset; - просто запускает тесты по-очереди
var suite = spectrophotometer.compare; // - сравнивает результаты внутри пакета, лучший результат подсвечивает другим цветом
var benchmark = spectrophotometer.bench;


var getAnswer = require('./../src/server_code.ss');
var getAnswer1 = require('./../src/server_code1.ss');

suite('Array iteration', function() {
    benchmark('Is server side?', function() {
        getAnswer("Is server side?");
    });

    benchmark('Is client side?', function() {
        getAnswer1("Is client side?");
    });
});

// Run all defined benchmarks
spectrophotometer.run();


/*
 //А вот так выглядит использование BenchmarkJS без spectrophotometer:

 var suite = new Benchmark.Suite;
 console.log('Wait some seconds for test result. Now test will be running')
 // add tests
 suite.add('RegExp#test', function() {
 /o/.test('Hello World!');
 })
 .add('String#indexOf', function() {
 'Hello World!'.indexOf('o') > -1;
 })
 // add listeners
 .on('cycle', function(event) {
 console.log('Callback cycle is called:');
 console.log(String(event.target));
 })
 .on('complete', function() {
 console.log('Callback complete is called:');
 console.log('Fastest is ' + this.filter('fastest').map('name'));
 })
 // run async
 .run({ 'async': true });
 */