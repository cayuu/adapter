
/**
 * Expose module
 */

module.exports = exports;


/**
 * Class Inheritance: applies prototypes and statics from parent to child
 *
 * @example
 * function ChildClass() { Parent.apply( this, arguments ); }
 * inherit( ChildClass, Parent );
 * // new ChildClass() instanceof Parent
 * // -> true
 *
 * @param {Function} child class
 * @param {Function} parent class
 */

exports.inherit = function inherit ( child, parent ) {

  var _constructor = function ( ctor ) {
    this.constructor = ctor;
  };

  _constructor.prototype = parent.prototype;
  child.prototype = new _constructor( child );

  for (var key in parent)
    if ( parent.hasOwnProperty( key ) )
    child[ key ] = parent[ key ];

};
