require('dotenv').config()
const RPC = process.env.DEV_RPC
const Web3 = require('web3')
const web3 = new Web3(RPC)

module.exports = web3
