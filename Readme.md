# adapter

An abstract adapter class for mekanika adapters.

**Alpha release**

## Overview

`adapter` is a method for instantiating new **Adapter** classes, and returning those adapter instances from an internal cache once declared.

Adapters are designed to map [**Qo** - Query objects](https://github.com/mekanika/qo) to a given service (such as a REST API, a database, a filesystem, etc).

### Usage

New Adapters are instantiated as follows:

```js
  var myadapter = adapter('myadapter');
  // adapter('myadapter') instanceof adapter.Adapter
  // -> true
```

### adapter cache (statics)

All adapters declared using the `adapter( name )` format are stored in the `adapter` cache.

`adapter` has the following static methods:

  - **.list()** - list all declared adapter keys
  - **.has( id )** - boolean existence for an adapter
  - **.reset()** - flush the cache


## Creating new Adapters

Adapters map a query request object to corresponding actions of a particular service. To do this, adapters must implement an `.exec( query, cb )` method that:

  - parses the [**Qo** - Query object](https://github.com/mekanika/qo)
  - Maps the query request to some action (ie. do something)
  - then runs the `cb` callback passing `cb( err, res )`
      - `err`: Error object or `null`
      - `res`: Results of successful execution (or `undefined`)

### Adapter Class

The initial `Adapter` class is very simple:

```js
var moo = adapter( 'moo' );
// -> { identity: 'moo' }
```

#### Prototype properties

- **config** - Empty `{}` object (used to store config)

#### Prototype methods

- **exec()** - Stub that throws `Error('Not implemented')`




## Installation

    npm install --production


## License

MIT
