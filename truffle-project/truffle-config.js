require('dotenv').config();
const PrivateKeyProvider = require('./private-provider');
var privateKey = process.env.KEY;

module.exports = {
  networks: {
    development: {
      provider: () => new PrivateKeyProvider(privateKey, 'http://localhost:9933/', 43),
      network_id: 43,
    },
    live: {
      networkCheckTimeout: 30000,
      provider: () =>
        new PrivateKeyProvider(privateKey, 'https://rpc.testnet.moonbeam.network', 43),
      network_id: 43,
    },
    ganache: {
      provider: () => new PrivateKeyProvider(privateKey, 'http://localhost:8545/', 43),
      network_id: 43,
    },
  },
  compilers: {
    solc: {
      version: '0.5.0',
    },
  },
};
