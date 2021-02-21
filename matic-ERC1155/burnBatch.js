const config = require('../matic_config')
const utils = require('../matic_utils')
const maticPOSClient = utils.getMaticPOSClient()

const execute = async () => {
  try {
    const tx = await maticPOSClient.burnBatchERC1155(
      config.child.ERC1155,
      [config.user.tokenId_sword, config.user.tokenId_axe],
      [config.user.amount_sword, config.user.amount_axe]
    )
    console.log(tx.transactionHash) // eslint-disable-line
  } catch (e) {
    console.error(e) // eslint-disable-line
  }
}

execute().then(() => process.exit(0))