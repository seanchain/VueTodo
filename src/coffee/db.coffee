mongoose = require 'mongoose'
# mongoose.connect 'mongodb://csh:test@localhost:27017/users'
mongoose.connect 'mongodb://localhost/users'
# 这个文件需要保存用户的todo的内容，对应一个用户id和他存入的todo内容

todoDataType =
  id: String
  todo: Object


schema = new mongoose.Schema todoDataType
Todo = mongoose.model 'Todo', schema

exports.checkDBConnection = ->
  dbsuc = mongoose.connection
  dbsuc.on 'error', (fn) ->
    fn "wrong connecting"
  "correct"

exports.insertARecord = (userid, todo) ->
  this.checkDBConnection (ret) ->
    console.log "#{ret} from the database checking function"
  todoContent =
    id: userid
    todo: todo
  todo = new Todo todoContent
  todo.save (err) ->
    console.log "something wrong here #{err}" if err
  "okay"
