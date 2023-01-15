const express = require('express')
const router = express.Router()
const {
  getTaskDetail,
  getCounter,
  addTask,
  updateTask,
  completeTask
} = require('../controllers/task')

router.get('/', getTaskDetail)
router.get('/counter', getCounter)
router.post('/', addTask)
router.put('/update', updateTask)
router.put('/complete', completeTask)

module.exports = router
