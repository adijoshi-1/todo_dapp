const express = require('express')
const router = express.Router()
const { getOwner } = require('../controllers/contract')

router.get('/owner', getOwner)

module.exports = router
