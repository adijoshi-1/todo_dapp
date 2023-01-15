require('dotenv').config()
const web3 = require('./web3Connection')
const contract_abi = require('./contract_abi')
const contract_address = process.env.CONTRACT_ADDRESS
const Contract = new web3.eth.Contract(contract_abi, contract_address)

module.exports = Contract
