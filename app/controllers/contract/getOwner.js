const { Contract } = require('../helpers')

const getOwner = async (req, res) => {
  try {
    const owner = await Contract.methods.getOwner().call()
    res.status(200).send({
      owner
    })
  } catch (err) {
    console.log(err)
    res.status(500)
  }
}

module.exports = getOwner
