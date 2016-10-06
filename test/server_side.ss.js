var assert = require('assert');
var getAnswer = require('./../src/server_code.ss');
var getAnswer1 = require('./../src/server_code1.ss');

describe('Is server side', function() {
  it('should return yes when ask is server side', function() {
    assert.equal('yes', getAnswer('Is server side?'));
  });
  it('should return no when ask is client side', function() {
    assert.equal('no', getAnswer('Is client side?'));
  });

  it('should return no when ask is client side', function() {
    assert.equal('no', getAnswer1('Is client side?'));
  });
});

