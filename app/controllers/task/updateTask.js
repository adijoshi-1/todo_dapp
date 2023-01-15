require('dotenv').config
const { Contract } = require('../helpers')
const contract_address = process.env.CONTRACT_ADDRESS

const updateTask = async (req, res) => {
  try {
    const { id, title, description } = req.body
    const Transaction = await Contract.methods.updateTask(
      id,
      title,
      description
    )
    const encoded_abi = await Transaction.encodeABI()

    res.status(200).send({
      contract_to_interact: contract_address,
      encoded_abi
    })
  } catch (err) {
    console.log(err.message)
    res.status(500)
  }
}

module.exports = updateTask
