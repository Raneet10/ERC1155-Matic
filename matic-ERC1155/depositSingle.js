const config = require('../matic_config')
const utils = require('../matic_utils')
const maticPOSClient = utils.getMaticPOSClient()

const execute = async () => {
    try {
      const tx = await maticPOSClient.depositSingleERC1155ForUser(
        config.root.ERC1155,
        config.user.address,
        config.user.tokenId_sword,
        config.user.amount_sword
      )
      console.log(tx.transactionHash) // eslint-disable-line
    } catch (e) {
      console.error(e) // eslint-disable-line
    }
  }
  
  execute().then(() => process.exit(0))