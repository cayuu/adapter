
/**
 * Dependencies
 */

var Adapter = require('./adapter');


/**
 * Expose `adapter`
 */

module.exports = exports = adapter;


/**
 * Expose the raw Adapter class
 */

exports.Adapter = Adapter;


/**
 * Internal adapter cache
 *
 * @type {Object}
 * @private
 */

var cache = {};


/**
 * Retrieves an adapter by name from cache (or returns a new blank one)
 *
 * @param {String} name Named identifier for the adapter
 *
 * @returns {Adapter} A cached version of the named adapter
 */

function adapter( name ) {
  // Return adapter from cache or create new
  if ( cache[ name ] ) return cache[ name ];

  // Add new adapter to internal cache
  var instance = new Adapter( name );
  cache[ name ] = instance

  // Reference to instance adapter class
  instance.adapter = adapter;

  return cache[ name ];
};


/**
 * Existence operator (does adapter `name` exist)
 *
 * @param {String} name Named identifier for the adapter
 *
 * @returns {Boolean}
 * @public
 */

adapter.has = function( name ) {
  return cache[name] ? true : false;
};
