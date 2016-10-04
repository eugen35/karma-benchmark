suite('Array iteration', function() {
    benchmark('native indexOf', function() {
        nativeIndexOf([1,2,3],2);
    });

    benchmark('find with for (var i = 0 ...)', function() {
        find([1,2,3],2);
    });
});



/*
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