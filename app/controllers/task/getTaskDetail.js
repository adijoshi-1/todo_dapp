const { Contract } = require('../helpers')

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
    console.log(err.message)
    res.status(500)
  }
}

module.exports = getTaskDetail
