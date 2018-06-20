const nem = require('nem-sdk').default;

module.exports = (privateKey, transferTransaction) => {
  // Create an un-prepared transfer transaction object
  //const transferTransaction = nem.model.objects.create('transferTransaction')(tx.recipient, tx.amount, tx.messagePayload);

  const common = nem.model.objects.create('common')('',  privateKey);

  // Prepare the transfer transaction object
  return nem.model.transactions.prepare('transferTransaction')(
    common, 
    transferTransaction, 
    'testnet'
  );

};
