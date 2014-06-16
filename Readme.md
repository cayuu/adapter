# adapter

An abstract adapter class for mekanika adapters.

**Alpha release**

## Overview

`adapter` is a method for instantiating new **Adapter** classes, and returning those adapter instances from an internal cache once declared.

Adapters are designed to map [**Qo** - Query objects](https://github.com/mekanika/qo) to a given service (such as a REST API, a database, a filesystem, etc). Typically they will sit on top of a service _driver_, and do little more than error check the **Qo** and translate it into a format the _driver_ can process, finally passing `(err, res)` back to the callback.

Adapters should by definition be extremely lightweight. Their only 'smart' is their translation layer between Qo and driver APIs. In exceptional circumstances where a driver API is significantly simpler than the default set of Qo actions, an adapter may implement Qo actions via the driver API.

In general an adapter will map as much of the Qo specification that is natively supported by the underlying driver.


### Usage

New Adapters are instantiated as follows:

```js
  var myadapter = adapter.new( 'myadapter', defaultConfig );
  // adapter('myadapter') instanceof adapter.Adapter
  // -> true
```

### adapter cache (statics)

All adapters can be retrieved using the `adapter( name )` format, and are stored in the `adapter` cache.

`adapter` has the following static methods:

  - **.list()** - list all declared adapter keys
  - **.has( id )** - boolean existence for an adapter
  - **.remove( id )** - removes an adapter from the cache
  - **.reset()** - flush the cache


## Creating new Adapters

Adapters map a query request object to corresponding actions of a particular service. To do this, adapters must implement an `.exec( query, cb )` method that:

  - parses the [**Qo** - Query object](https://github.com/mekanika/qo)
  - Maps the query request to some action (ie. do something)
  - then runs the `cb` callback passing `cb( err, res )`
      - `err`: Error object or `null`
      - `res`: Results of successful execution (or `undefined`)

### Adapter Class

All Adapters are **EventEmitters** (based on [EventEmitter2](https://github.com/hij1nx/EventEmitter2))

The initial `Adapter` class is very simple:

```js
var moo = adapter.new( 'moo', {prop: true} );
// -> { identity: 'moo', config: {prop: true} }
```

**On the Prototype**

- **config** - Empty `{}` object (used to store config)
- **exec()** - Stub that throws `Error('Not implemented')`

### Implementing `.exec( query, cb )`

#### Action: **Find**

Two paths for finding records, either via:

**Identifiers**

- List of ids to 'find' `{identifiers: ['xyz']}`

**Constraints**

- WHERE field OPERATOR $value `[{field:'name', operator:'eq', condition:'joe'}]`



#### Action: **Update**

There are two (independent) update paths, updating via either/or:

**Modifiers**

- SET field to VALUE `{set: $field, value: $value}`
- INCR field by AMOUNT `{inc: $field, value: $value}` (can be negative)

**Content**

- Content to modify `content: [ {vip: true} ]`

Where multiple `identifiers` are set, the content or modifiers should be applied to all ids. If no identifiers are set, the update will be applied to `where` conditions, eg:

```js
{
  action: 'update',
  resource: 'users',
  modifiers: [{set:'vip', value: true}],
  where: [{field:'points', operator:'gte', constraint:500}]
}
// Sets 'vip' to true on users who have points >= 500
```


## Installation

    npm install --production

For development, requires globally installed:

- mocha
- browserify
- jshint
- istanbul


## License

MIT
