const express = require('express'),
      app = express()

app.get('/', function(req, res) {
  res.sendFile('/home/xen/dynamic/todo/rendered/daily.html')
})
app.get('/serviceWorker.js', function(req, res) {
  res.sendFile('/home/xen/dynamic/todo/rendered/_serviceWorker.js')
})

app.listen(3003, '127.0.0.1')