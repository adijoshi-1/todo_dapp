const getTaskDetail = require('./getTaskDetail')
const getCounter = require('./getCounter')
const addTask = require('./addTask')
const updateTask = require('./updateTask')
const completeTask = require('./completeTask')
const unCompleteTask = require('./unCompleteTask')
const deleteTask = require('./deleteTask')

module.exports = {
  getTaskDetail,
  getCounter,
  addTask,
  updateTask,
  completeTask,
  unCompleteTask,
  deleteTask
}
