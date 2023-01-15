const { Contract } = require('../helpers')
const { handleError } = require('../../middleware/utils/handleError')
const { buildErrorObj } = require('../../middleware/utils/buildErrorObj')

const getTaskDetail = async (req, res) => {
  try {
    const { id } = req.query
    const data = await Contract.methods.getTaskDetails(id).call()
    res.status(200).send({
      title: data.title,
      description: data.description,
      isCompleted: data.isCompleted,
      isRemoved: data.isRemoved
    })
  } catch (err) {
    return handleError(res, buildErrorObj(500, err.message))
  }
}

module.exports = getTaskDetail
