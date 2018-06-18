# middleware-service-tx [![Build Status](https://travis-ci.org/ChronoBank/middleware-service-tx.svg?branch=master)](https://travis-ci.org/ChronoBank/middleware-service-tx)

Middleware service for which expose rest api

### Installation

This module is a part of middleware services. You can install it in 2 ways:

1) through core middleware installer  [middleware installer](https://www.npmjs.com/package/chronobank-middleware)
2) by hands: just clone the repo, do 'npm install', set your .env - and you are ready to go

#### About
This module is used for interaction with middleware. This happens through the layer, which is built on node-red.
So, you don't need to write any code - you can create your own flow with UI tool supplied by node-red itself. Access by this route:
```
/admin
````


#### Predefined Routes with node-red flows

| description | route | method | params | output | 
| --------- | ---- | - | ---- | --- | 
| /tx/waves/sign


##### сonfigure your .env

To apply your configuration, create a .env file in root folder of repo (in case it's not present already).
Below is the expamle configuration:

```
MONGO_ACCOUNTS_URI=mongodb://localhost:27017/data
MONGO_ACCOUNTS_COLLECTION_PREFIX=waves

MONGO_DATA_URI=mongodb://localhost:27017/data
MONGO_DATA_COLLECTION_PREFIX=waves

NODERED_MONGO_URI=mongodb://localhost:27018/data
NODE_RED_MONGO_COLLECTION_PREFIX=rest

REST_PORT=8081
NODERED_AUTO_SYNC_MIGRATIONS=true
API_KEY=password
HTTP_ADMIN=/admin
RPC=http://localhost:6869
```

The options are presented below:

| name | description|
| ------ | ------ |
| MONGO_URI   | the URI string for mongo connection
| MONGO_COLLECTION_PREFIX   | the default prefix for all mongo collections. The default value is 'waves'
| MONGO_ACCOUNTS_URI   | the URI string for mongo connection, which holds users accounts (if not specified, then default MONGO_URI connection will be used)
| MONGO_ACCOUNTS_COLLECTION_PREFIX   | the collection prefix for accounts collection in mongo (If not specified, then the default MONGO_COLLECTION_PREFIX will be used)
| MONGO_DATA_URI   | the URI string for mongo connection, which holds data collections (for instance, processed block's height). In case, it's not specified, then default MONGO_URI connection will be used)
| MONGO_DATA_COLLECTION_PREFIX   | the collection prefix for data collections in mongo (If not specified, then the default MONGO_COLLECTION_PREFIX will be used)
| NODERED_MONGO_URI   | the URI string for mongo connection, which holds data collections (for instance, processed block's height). In case, it's not specified, then default MONGO_URI connection will be used)
| NODE_RED_MONGO_COLLECTION_PREFIX   | the collection prefix for node-red collections in mongo (If not specified, then the collections will be created without prefix)
| REST_PORT   | rest plugin port
| NODERED_AUTO_SYNC_MIGRATIONS   | autosync migrations on start (default = yes)
| API_KEY | api key for node waves [private requests]
| HTTP_ADMIN | admin path for nodered or false (if not publish as default)
| RPC   | the path to waves rest api for get balance for user 

#### Configure env for tests


| name | description|
| ------ | ------ |
| ACCOUNT_ONE | address for first account
| ACCOUNT_TWO | address for second account
| PRIVATE_KEY_ONE | private key for first account
| PUBLIC_KEY_ONE | public key for first account
| PRIVATE_KEY_TWO | private key for second account
| PUBLIC_KEY_TWO | public key for second account
| RPC | rpc path for node waves api 



License
----
 [GNU AGPLv3](LICENSE)

Copyright
----
LaborX PTY
