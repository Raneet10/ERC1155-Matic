const MaticPOSClient = require("@maticnetwork/maticjs").MaticPOSClient;
const config = require("./matic_config");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const getMaticPOSClient = () => {
  return new MaticPOSClient({
    network: "testnet", // optional, default is testnet
    version: "mumbai", // optional, default is mumbai
    parentProvider: new HDWalletProvider(
      config.user.mnemonic,
      config.root.RPC
    ),
    maticProvider: new HDWalletProvider(
      config.user.mnemonic,
      config.child.RPC
    ),
    posRootChainManager: config.root.POSRootChainManager,
    posERC1155Predicate: config.root.posERC1155Predicate, 
    parentDefaultOptions: { from: config.user.address }, 
    maticDefaultOptions: { from: config.user.address }, 
  });
};