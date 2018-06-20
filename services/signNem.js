/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 * @author Kirill Sergeev <cloudkserg11@gmail.com>
*/
const signWavesTransaction = require('../utils/signWavesTransaction');


const getSeed = (signKeys, address) => {
  if (!signKeys[address]) 
    throw new Error('not found seed for address ' + address);
  return signKeys[address];
};

module.exports = (signKeys, address, tx) => {
  const seed = getSeed(signKeys, address);



  return signWavesTransaction(seed, tx);
};
