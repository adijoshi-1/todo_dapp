const express = require('express')
const router = express.Router()
const {
  getTaskDetail,
  getCounter,
  addTask,
  updateTask,
  completeTask,
  unCompleteTask,
  deleteTask
} = require('../controllers/task')

router.get('/', getTaskDetail)
router.get('/counter', getCounter)
router.post('/', addTask)
router.put('/update', updateTask)
router.put('/complete', completeTask)
router.put('/uncomplete', unCompleteTask)
router.delete('/', deleteTask)

module.exports = router
