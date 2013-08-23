
/**
 * Expose `adapter`
 */

module.exports = adapter;


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


/**
 * Create a new Adapter
 *
 * @constructor
 * @private
 */

function Adapter( name ) {
  this.identity = name;

  return this;
}


/**
 * Override .toString() to return accessor `adapter( name )`
 *
 * @returns {String} The accessor method for the adapter
 */

Adapter.toString = function() { return 'adapter(\''+name+'\')'; };


/**
 * Circular reference to the constructor
 */

Adapter.prototype.Adapter = Adapter;


/**
 * Interface method for Adapter#init()
 */

Adapter.prototype.init = function() {
  throw new Error('No '+this.identity+'.init() implemented');
};


/**
 * Interface method for Adapter#exec()
 */

Adapter.prototype.exec = function() {
  throw new Error('No '+this.identity+'.exec() implemented');
};
