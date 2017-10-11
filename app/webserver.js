const express = require('express'),
      app = express()

app.get('/', function (req, res) {
  res.sendfile('./rendered/daily.html')
})

app.listen(3003, '127.0.0.1')