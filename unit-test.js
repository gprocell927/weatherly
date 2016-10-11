require ('./index.js');

describe('input attributes', function(){
  it('should recognize when a zipcode has been entered', function(){

      var zip = checkInputType(80013);

      assert.equal(zip.length, 5);
  });
});
