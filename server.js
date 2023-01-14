const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname) + '/pages/index.html')
  } catch (err) {
    console.log(err.message)
  }
})

const server = app.listen(PORT, () => {
  const port = server.address().port
  console.log('Server Listening at port', port)
})
