const { Contract } = require('../helpers')
const { handleError } = require('../../middleware/utils/handleError')
const { buildErrorObj } = require('../../middleware/utils/buildErrorObj')

const getCounter = async (req, res) => {
  try {
    const counter = await Contract.methods.getTasksCounter().call()
    res.status(200).send({
      counter
    })
  } catch (err) {
    return handleError(res, buildErrorObj(500, err.message))
  }
}

module.exports = getCounter
