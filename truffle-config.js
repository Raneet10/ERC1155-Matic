require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');
const goerliUrl = process.env.GOERLI_URL;
const mnemonic = process.env.MNEMONIC;
const NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker")

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777"
    },
    goerli: {
      provider: function() {
        var wallet = new HDWalletProvider(mnemonic, goerliUrl);
        var nonceTracker = new NonceTrackerSubprovider()
        wallet.engine._providers.unshift(nonceTracker)
        nonceTracker.setEngine(wallet.engine)
        return wallet
      },
      network_id: 5
    },
    matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  mocha: {
  },
  compilers: {
    solc: {
      version: "0.7.0",
    },
  },
};