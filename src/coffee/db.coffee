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

exports.insertARecord = (userid, todo, fn) ->
  Todo.find({id: userid}).remove().exec()
  todoContent =
    id: userid
    todo: todo
  todo = new Todo todoContent
  todo.save (err) ->
    fn "something wrong here #{err}" if err
    fn "everything is fine" if !err

exports.getUserTodos = (userid, fn) ->
  Todo.find {id: userid}, (err, obj) ->
    fn obj[0]["todo"] if !err
    fn "error getting data" if err
