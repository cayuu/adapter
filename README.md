
# Adapter (Qe)

 **Work in Progress** - do not use! Will eventually be:
 
> A class for parsing and processing [**Qe** (Query envelopes)](https://github.com/mekanika/qe). 


## Overview 

Adapters _consume_ **Query envelopes** (_Qe_) and map their control messages to a given service. They are like _Qe plugins_ for existing services.

Example services are things like a REST interface, a database, a filesystem, etc. Typically an Adapter will sit on top of a service _driver_, and do little more than error check the _Qe_ and translate it into a format the _driver_ can process, finally passing `(error, results)` from the service to a callback.

The `Adapter` library provides tools and helpers for building custom adapters according to the recommendations of the _Qe_ spec for "[Implementing Qe: Adapters](https://github.com/mekanika/qe#implementing-qe-adapters)".


## Usage

> **WIP - DO NOT USE**

### Development notes
Adapters should be extremely lightweight. Their only 'smart' is the translation layer between _Qe_ and driver APIs. In general an adapter should aim to map as much of the [_Qe_ specification](https://github.com/mekanika/qe) that is natively supported by the underlying driver.




## Install

For now, clone this repository:

    git clone https://github.com/mekanika/adapter.git

Then install the dependencies:

    npm install --production



## Development on Adapter

Install the development dependencies:

    npm install

To run the **tests**:

    npm test

To **lint** the code:

    npm run lint

To generate a **coverage** report:

    npm run coverage



## License

Copyright &copy; 2013-2015 Clint Walker

Released under the **Mozilla Public License v2.0** ([MPLv2](http://mozilla.org/MPL/2.0/))
