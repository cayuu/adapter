
/**
 * Dependencies
 */

var EventEmitter = require('eventemitter2').EventEmitter2
  , inherit = require('./utils').inherit;


/**
 * Expose Class
 */

module.exports = exports = Adapter;


/**
 * Create a new Adapter
 *
 * @constructor
 */

function Adapter( name ) {
  this.identity = name;

  // Apply EventEmitter inheritance
  EventEmitter.apply( this );
}

/**
 * Inherit from EventEmitter
 */

inherit( Adapter, EventEmitter );


/**
 * Expose EventEmitter class
 */

Adapter.EventEmitter = EventEmitter;


/**
 * Override .toString() to return accessor `adapter( name )`
 *
 * @returns {String} The accessor method for the adapter
 */

Adapter.prototype.toString = function () {
  return "adapter('"+ this.identity +"')";
};


/**
 * Stub adapter execution method
 */

Adapter.prototype.exec = function () {
  throw new Error('Adapter not implemented');
};
