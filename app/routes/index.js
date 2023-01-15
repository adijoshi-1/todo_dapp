const express = require('express')
const router = express.Router()
const fs = require('fs')
const routesPath = `${__dirname}/`
const {
  removeExtensionFromFile
} = require('../middleware/utils/removeExtensionFromFile')

fs.readdirSync(routesPath).filter((file) => {
  const routeFile = removeExtensionFromFile(file)
  return routeFile !== 'index'
    ? router.use(`/${routeFile}`, require(`./${routeFile}`))
    : ''
})

router.use('*', (req, res) => {
  res.status(404).json({
    Error: {
      Message: 'URL_NOT_FOUND'
    }
  })
})

module.exports = router
