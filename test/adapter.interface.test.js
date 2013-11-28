
/**
 * Dependencies
 */

var expect = require('expect.js')
  , adapter = require('../lib/index');


describe('adapter() interface', function () {

  it('exposes core .Adapter class', function() {
    expect( adapter.Adapter ).to.be.a( Function );
  });

  it('exports a method that returns an Adapter', function() {
    expect( adapter ).to.be.a( Function );
    expect( adapter() ).to.be.an( adapter.Adapter );
  });

});
