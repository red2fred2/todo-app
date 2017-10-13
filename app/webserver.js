const express = require('express'),
      app = express()

app.all('*', function (req, res) {
  res.sendFile('/home/xen/dynamic/todo/rendered/daily.html')
})

app.listen(3003, '127.0.0.1')