const { Contract } = require('../helpers')

const getCounter = async (req, res) => {
  try {
    const counter = await Contract.methods.getTasksCounter().call()
    res.status(200).send({
      counter
    })
  } catch (err) {
    console.log(err.message)
    res.status(500)
  }
}

module.exports = getCounter
