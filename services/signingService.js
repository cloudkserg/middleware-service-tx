/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 * @author Kirill Sergeev <cloudkserg11@gmail.com>
*/
const blockchains = {
    'nem': require('./signNem'),
    'waves': require('./signWaves')
  },
  _ = require('lodash');


module.exports = (signKeys) => {
  const blockchainKeys = (blockchain) => _.get(signKeys, blockchain, []);
  const blockchainService = (blockchain) => {
    if (!blockchains[blockchain])
      throw new Error('not found this blockchain ' + blockchain);
 
    return blockchains[blockchain];
  };

  return (blockchain, address, tx) => {
    const service = blockchainService(blockchain);
    return service(blockchainKeys(blockchain), address, tx);
  };
};
