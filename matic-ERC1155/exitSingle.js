const utils = require('../matic_utils')
const maticPOSClient = utils.getMaticPOSClient()

const burnHash = '' //TODO

const execute = async () => {
  try {
    const tx = await maticPOSClient.exitSingleERC1155(burnHash)
    console.log(tx.transactionHash) // eslint-disable-line
  } catch (e) {
    console.error(e) // eslint-disable-line
  }
}

execute().then(() => process.exit(0))