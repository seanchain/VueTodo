// Generated by CoffeeScript 1.10.0
(function() {
  var saveFunc, todo, todo_content;

  saveFunc = function(elem) {
    var poststuff, request;
    console.log(elem);
    poststuff = {
      url: 'http://localhost:3000/save',
      type: 'POST',
      data: {
        content: 'elem'
      }
    };
    request = $.ajax(poststuff);
    request.done(function(msg) {
      return console.log(msg);
    });
    return request.fail(function(jqXHR, textStatus) {
      return console.log(textStatus);
    });
  };

  todo_content = {
    el: '#todo',
    data: {
      newTodo: '',
      todos: [
        {
          text: 'Add some todos'
        }
      ]
    },
    methods: {
      addTodo: function() {
        var text;
        text = this.newTodo.trim();
        this.todos.push({
          text: text
        });
        if (text) {
          this.newTodo = '';
        }
        return saveFunc(text);
      },
      removeTodo: function(index) {
        this.todos.splice(index, 1);
        return saveFunc(text);
      }
    }
  };

  todo = new Vue(todo_content);

}).call(this);