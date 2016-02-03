mongoose = require 'mongoose'
# mongoose.connect 'mongodb://csh:test@localhost:27017/users'

mongoose.connection.on 'open', (ref) ->
  console.log "Connected to the db"
mongoose.connection.on 'error', (err) ->
  console.log "Connected error: #{err}"

mongoose.connect 'mongodb://localhost/users'
todoDataType =
  id: String
  todo: Object

schema = new mongoose.Schema todoDataType
Todo = mongoose.model 'Todo', schema

exports.insertARecord = (userid, todo) ->
  todoContent =
    id: userid
    todo: todo
  todo = new Todo todoContent
  todo.save (err) ->
    "something wrong here #{err}" if err
