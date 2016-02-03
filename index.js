var express = require('express')
var mongoose = require('mongoose')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var db = require('./dist/js/db.js')
var app = express()

app.use(express.static(__dirname + '/dist'))
app.use(cookieParser())
app.use(bodyParser())

app.get('/todo', function (req, res) {
  res.sendFile(__dirname + '/todo/index.html')
})

app.post('/save', function (req, res) {
  var content = req.body.content
  var saveRes = db.insertARecord('csh', content)
  console.log('The value from the database is ' + saveRes)
  res.send('nice')
})

app.listen(3000, function () {
  console.log('Listening on port 3000')
})
