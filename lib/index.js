
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

  return adapter.new( name );
}


/**
 * Explicit creation method for creating a new adapter
 *
 * @param {String} name
 *
 * @returns {Adapter}
 */

adapter.new = function ( name ) {
  // Add new adapter to internal cache
  var instance = new Adapter( name );
  cache[ name ] = instance;

  // Reference to instance adapter class
  instance.adapter = adapter;

  return cache[ name ];
};


/**
 * Reset adapter interface - nukes the internal `cache`
 *
 * @public
 */

adapter.flush =
adapter.reset = function () {
  cache = {};
};


/**
 * Removes an adapter from the cache
 *
 * @param {String} id
 *
 * @returns {Boolean} Successful deletion or not
 */

adapter.remove = function (id) {
  return cache[ id ]
    ? delete cache[ id ]
    : false;
};


/**
 * Returns a list of keys for all declared (cached) adapters
 *
 * @returns {Array}
 * @public
 */

adapter.list = function () {
  var ret = [];
  for (var a in cache)
    if (a !== 'undefined') ret.push( a );

  return ret;
};


/**
 * Existence operator (does adapter `name` exist)
 *
 * @param {String} id Named identifier for the adapter
 *
 * @returns {Boolean}
 * @public
 */

adapter.has = function ( id ) {
  return cache[ id ] ? true : false;
};
