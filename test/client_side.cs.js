describe('Detect userAgent', function() {
  it('should return string with name of userAgent', function() {
    assert.equal('string', typeof detectUserAgent());
  });
});

