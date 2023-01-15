const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8080
const bodyParser = require('body-parser')
const cors = require('cors')

app.get('/', (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname) + '/pages/index.html')
  } catch (err) {
    console.log(err.message)
  }
})

app.use(
  bodyParser.json({
    limit: '20mb'
  })
)

app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: false
  })
)

app.use(cors())

app.use(require('./app/routes'))

const server = app.listen(PORT, () => {
  const port = server.address().port
  console.log('Server Listening at port', port)
})
