describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, nativeIndexOf([1,2,3],4));
    });
    it('should return -1 when the value is not present', function() {
      assert.equal(2, find([1,2,3], 3));
    });
  });
});
