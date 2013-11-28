
/**
 * Expose Class
 */

module.exports = exports = Adapter;


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
