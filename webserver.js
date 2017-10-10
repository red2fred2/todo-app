const express = require('express'),
      app = express()
const fileLocation = '/home/xen/dynamic/todo/',
      port = 3003

app.get('/', function (req, res) {
  res.sendFile(fileLocation + 'rendered/daily.html')
})

app.listen(port, '127.0.0.1', function() {
  console.log('listening')
})