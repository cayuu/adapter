
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
