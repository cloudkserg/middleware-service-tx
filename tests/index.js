/** 
* Copyright 2017–2018, LaborX PTY
* Licensed under the AGPL Version 3 license.
* @author Kirill Sergeev <cloudkserg11@gmail.com>
*/
require('dotenv/config');

const config = require('../config'),
  Promise = require('bluebird'),
  expect = require('chai').expect,
  _ = require('lodash');


const request = require('request');


describe('core/service-tx', function () { //todo add integration tests for query, push tx, history and erc20tokens

  it('create waves tx and signing', async () => {
    const transferData = {
      // An arbitrary address; mine, in this example
      recipient: '3Jk2fh8aMBmhCQCkBcUfKBSEEa3pDMkDjCr',
      // ID of a token, or WAVES
      assetId: 'WAVES',
      // The real amount is the given number divided by 10^(precision of the token)
      amount: 10000000,
      // The same rules for these two fields
      feeAssetId: 'WAVES',
      fee: 100000,
      // 140 bytes of data (it's allowed to use Uint8Array here)
      attachment: '',
      timestamp: Date.now()
    };

    // const sign = config.nodered.functionGlobalContext.libs.signingService;
    // const a = sign('waves', '3JfE6tjeT7PnpuDQKxiVNLn4TJUFhuMaaT5', transferData);
    // console.log(a);return;

    await new Promise((res, rej) => {
      request({
        url: `http://localhost:${config.rest.port}/sign/waves/3JfE6tjeT7PnpuDQKxiVNLn4TJUFhuMaaT5`,
        method: 'POST',
        json: {tx: transferData}
      }, async (err, resp) => {
        if (err || resp.statusCode !== 200) 
          return rej(err || resp);
        const tx = resp.body.tx;
        console.log(tx);
        expect(tx).not.to.be.not.null;
        expect(tx.signature).to.be.not.undefined;
        res();
      });
    });

  });
  it('create nem tx and signing', async () => {
    const transferData = {
      // An arbitrary address; mine, in this example
      recipient: '3Jk2fh8aMBmhCQCkBcUfKBSEEa3pDMkDjCr',
      // ID of a token, or WAVES
      assetId: 'WAVES',
      // The real amount is the given number divided by 10^(precision of the token)
      amount: 10000000,
      // The same rules for these two fields
      feeAssetId: 'WAVES',
      fee: 100000,
      // 140 bytes of data (it's allowed to use Uint8Array here)
      attachment: '',
      timestamp: Date.now()
    };

    // const sign = config.nodered.functionGlobalContext.libs.signingService;
    // const a = sign('waves', '3JfE6tjeT7PnpuDQKxiVNLn4TJUFhuMaaT5', transferData);
    // console.log(a);return;

    await new Promise((res, rej) => {
      request({
        url: `http://localhost:${config.rest.port}/sign/nem/3JfE6tjeT7PnpuDQKxiVNLn4TJUFhuMaaT5`,
        method: 'POST',
        json: {tx: transferData}
      }, async (err, resp) => {
        if (err || resp.statusCode !== 200) 
          return rej(err || resp);
        const tx = resp.body.tx;
        console.log(tx);
        expect(tx).not.to.be.not.null;
        expect(tx.signature).to.be.not.undefined;
        res();
      });
    });

  });
});
