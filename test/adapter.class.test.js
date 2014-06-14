
/**
 * Dependencies
 */

var expect = require('expect.js')
  , Adapter = require('../lib/adapter');


describe('Adapter class', function () {

  describe('instantiation', function () {

    it('applies name as .identity', function () {
      var a = new Adapter('!');
      expect( a.identity ).to.be( '!' );
    });

    it('provides an empty .config object property', function () {
      var a = new Adapter('!');
      expect( a.config ).to.be.an( Object );
      expect( a.config ).to.be.empty();
    });

    it('can apply a config object as Adapter configuration', function () {
      var a = new Adapter('!', {cool:true});
      expect( a.config.cool ).to.be( true );
    });

    it('.toString() should return accessor `adapter($id)`', function () {
      var a = new Adapter(':)');
      expect( a.toString() ).to.be( "adapter(':)')" );
    });

  });


  describe('EventEmitter', function () {

    it('exposes EventEmitter class', function () {
      expect( new Adapter.EventEmitter() ).to.be.an( Adapter.EventEmitter );
    });

    it('adapter instances are EventEmitters', function () {
      var a = new Adapter('!');
      expect( a ).to.be.an( Adapter.EventEmitter );
    });

  });


});
