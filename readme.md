# ns8-api-interfaces #
JavaScript interfaces and Typescript definitions to support NS8 API clients.  These interfaces support **version 2** of the API.

*This is not a client implementation for the NS8 API.*

## Installation ##
```
npm add ns8-api-interfaces --save
```

## Usage ##


#### JavaScript ####

```
const ns8 = require('ns8-api-interfaces');
console.log(ns8.Admin.VERSION);
```


#### Typescript ####

```
import { Admin } from 'ns8-api-interfaces');
console.log(Admin.VERSION);
```