const { Contract } = require('../helpers')
const { handleError } = require('../../middleware/utils/handleError')
const { buildErrorObj } = require('../../middleware/utils/buildErrorObj')

const getOwner = async (req, res) => {
  try {
    const owner = await Contract.methods.getOwner().call()
    res.status(200).send({
      owner
    })
  } catch (err) {
    return handleError(res, buildErrorObj(500, err.message))
  }
}

module.exports = getOwner
