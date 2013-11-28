
/**
 * Dependencies
 */

var expect = require('expect.js')
  , adapter = require('../lib/index');


describe('adapter() interface', function () {

  it('exposes core .Adapter class', function () {
    expect( adapter.Adapter ).to.be.a( Function );
  });

  it('exports a method that returns an Adapter', function () {
    expect( adapter ).to.be.a( Function );
    expect( adapter() ).to.be.an( adapter.Adapter );
  });


  describe('methods', function () {

    beforeEach( function () { adapter.reset(); } );

    it('.list() returns array of keys of cached adapters', function () {
      expect( adapter.list() ).to.be.empty();
      adapter(':)');
      adapter(';(');
      expect( adapter.list() ).to.have.length( 2 );
      expect( adapter.list() ).to.contain( ':)', ';(' );
    });

    it('.reset() empties the cache of adapters', function () {
      adapter.reset();
      expect( adapter.list() ).to.have.length( 0 );
      adapter( '!' );
      expect( adapter.list() ).to.have.length( 1 );
      adapter.reset();
      expect( adapter.list() ).to.have.length( 0 );
    });

    it('alias .flush() to .reset()', function () {
      expect( adapter.flush ).to.be( adapter.reset );
    });

    it('.has( id ) returns boolean existence of adapter `id`', function () {
      adapter('mega');
      expect( adapter.has( 'mega' ) ).to.be( true );
      expect( adapter.has( 'nope' ) ).to.be( false );
    });

  });

});
