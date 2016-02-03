(function() {
  var Todo, mongoose, schema, todoDataType;

  mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/users');

  todoDataType = {
    id: String,
    todo: Object
  };

  schema = new mongoose.Schema(todoDataType);

  Todo = mongoose.model('Todo', schema);

  exports.checkDBConnection = function() {
    var dbsuc;
    dbsuc = mongoose.connection;
    dbsuc.on('error', function(fn) {
      return fn("wrong connecting");
    });
    return "correct";
  };

  exports.insertARecord = function(userid, todo) {
    var todoContent;
    this.checkDBConnection(function(ret) {
      return console.log(ret + " from the database checking function");
    });
    todoContent = {
      id: userid,
      todo: todo
    };
    todo = new Todo(todoContent);
    todo.save(function(err) {
      if (err) {
        return console.log("something wrong here " + err);
      }
    });
    return "okay";
  };

}).call(this);
