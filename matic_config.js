require('dotenv').config()

module.exports = {
  root: {
    RPC: process.env.GOERLI_URL,
    POSRootChainManager: "0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74",
    ERC1155: "0x524A11efb999Ce31E280A13da625F696cd45175c", 
    posERC1155Predicate: "0xB19a86ba1b50f0A395BfdC3557608789ee184dC8",
    posEtherPredicate: "0xe2B01f3978c03D6DdA5aE36b2f3Ac0d66C54a6D5",
  },
  child: {
    RPC: "https://rpc-mumbai.matic.today",
    ERC1155: "0x54598d68A8CAdDBbF72108239152F8fA3878b40B",
    MaticWETH: "0x714550C2C1Ea08688607D86ed8EeF4f5E4F22323",
  },
  user: {
    mnemonic: process.env.MNEMONIC,
    address: "0xb3ee60688Bce35de0ee9F4eE5291d6E922D09a2C",
    amount_sword: "5000000000000000",
    amount_axe: "7000000000000000",
    amount_mjolnir: "1", 
    tokenId_sword: "0",
    tokenId_axe: "1",
    tokenId_mjolnir: "2"
  },
};