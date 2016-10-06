var perf = require('mocha-benchmark').create({
  Benchmark: Benchmark || require('benchmark'),

  /* could be describe */
  suite: suite,
  /* or it */
  test: test
});


var getAnswer = require('./../src/server_code.ss');
var getAnswer1 = require('./../src/server_code1.ss');

// perf.suite only runs the last version (usually your latest)
perf.suite('libGlobal', function(perf, libGlobal) {

  perf.test('my lib should be fast', function() {
    getAnswer("Is server side?");
  });

  // all tests inside compare run for each version
  perf.compare(function(perf, libGlobal) {
    perf.test('my lib should be faster', function() {
      getAnswer1("Is client side?");
    });
  });
});
