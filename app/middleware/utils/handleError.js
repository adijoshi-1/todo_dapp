const handleError = (res = {}, err = {}) => {
  res.status(err.code).json({
    Errors: {
      Message: err.message
    }
  })
}

module.exports = { handleError }
