(function() {
  var loadTodos, saveFunc, todo, todo_content;

  saveFunc = function(elem) {
    var poststuff, request;
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

  loadTodos = function() {
    var todos;
    return todos = [
      {
        text: 'First todo'
      }, {
        text: 'Second todo'
      }
    ];
  };

  todo_content = {
    el: '#todo',
    data: {
      newTodo: '',
      todos: loadTodos()
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
