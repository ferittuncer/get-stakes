const Web3 = require('web3')
const fetch = require('isomorphic-fetch')

module.exports.web3 = new Web3(
  new Web3.providers.HttpProvider(process.env.ETHEREUM_PROVIDER)
)
