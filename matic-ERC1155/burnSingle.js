const config = require('../matic_config')
const utils = require('../matic_utils')
const maticPOSClient = utils.getMaticPOSClient()

const execute = async () => {
    try {
      const tx = await maticPOSClient.burnSingleERC1155(config.child.ERC1155, config.user.tokenId_sword, config.user.amount_sword)
      console.log(tx.transactionHash) // eslint-disable-line
    } catch (e) {
      console.error(e) // eslint-disable-line
    }
  }
  
  execute().then(() => process.exit(0))