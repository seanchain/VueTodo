(function() {
  var Todo, mongoose, schema, todoDataType;

  mongoose = require('mongoose');

  mongoose.connection.on('open', function(ref) {
    return console.log("Connected to the db");
  });

  mongoose.connection.on('error', function(err) {
    return console.log("Connected error: " + err);
  });

  mongoose.connect('mongodb://localhost/users');

  todoDataType = {
    id: String,
    todo: Object
  };

  schema = new mongoose.Schema(todoDataType);

  Todo = mongoose.model('Todo', schema);

  exports.insertARecord = function(userid, todo) {
    var todoContent;
    todoContent = {
      id: userid,
      todo: todo
    };
    todo = new Todo(todoContent);
    return todo.save(function(err) {
      if (err) {
        return "something wrong here " + err;
      }
    });
  };

}).call(this);
