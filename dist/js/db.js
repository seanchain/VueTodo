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

  exports.insertARecord = function(userid, todo, fn) {
    var todoContent;
    Todo.find({
      id: userid
    }).remove().exec();
    todoContent = {
      id: userid,
      todo: todo
    };
    todo = new Todo(todoContent);
    return todo.save(function(err) {
      if (err) {
        fn("something wrong here " + err);
      }
      if (!err) {
        return fn("everything is fine");
      }
    });
  };

  exports.getUserTodos = function(userid, fn) {
    return Todo.find({
      id: userid
    }, function(err, obj) {
      if (!err) {
        fn(obj[0]["todo"]);
      }
      if (err) {
        return fn("error getting data");
      }
    });
  };

}).call(this);
