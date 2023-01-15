require('dotenv').config()
const contract_address = process.env.CONTRACT_ADDRESS
const { Contract } = require('../helpers')
const { handleError } = require('../../middleware/utils/handleError')
const { buildErrorObj } = require('../../middleware/utils/buildErrorObj')

const deleteTask = async (req, res) => {
  try {
    const { id } = req.body
    const Transaction = await Contract.methods.removeTask(id)
    const encoded_abi = await Transaction.encodeABI()

    res.status(200).send({
      contract_to_interact: contract_address,
      encoded_abi
    })
  } catch (err) {
    return handleError(res, buildErrorObj(500, err.message))
  }
}

module.exports = deleteTask
