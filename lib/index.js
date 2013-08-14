
// Internal adapter cache
var cache = {};

var adapter = function( name ) {
  // Return adapter from cache or create new
  if ( cache[ name ] ) return cache[ name ];

  // Add new adapter to internal cache
  cache[ name ] = new Adapter( name );
  return cache[ name ];
};

// Existence operator (does adapter `name` exist)
adapter.has = function( name ) {
  return cache[name] ? true : false;
};


function Adapter( name ) {
  this.identity = name;

  return this;
}
Adapter.toString = function() { return 'adapter(\''+name+'\')'; };

// Referential to constructor and statics
Adapter.prototype.Adapter = Adapter;

Adapter.prototype.init = function() { throw new Error('No Adapter#init()'); };
Adapter.prototype.exec = function() { throw new Error('No Adapter#exec()'); };


// Export the adapter
module.exports = exports = adapter;
