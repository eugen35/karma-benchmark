describe('Is server side', function() {
  it('should return yes when ask is server side', function() {
    assert.equal('yes', getAnswer('Is server side?'));
  });
  it('should return no when ask is client side', function() {
    assert.equal('no,.,.,.,', getAnswer('Is client side?'));
  });
});

