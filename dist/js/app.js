(function() {
  var todo, todo_content, updateTodos;

  updateTodos = function(elem) {
    var poststuff, request;
    poststuff = {
      url: '/modify',
      type: 'POST',
      data: {
        content: elem
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
      todos: []
    },
    created: function() {
      return this.fetchData();
    },
    methods: {
      fetchData: function() {
        var self, xhr;
        xhr = new XMLHttpRequest();
        self = this;
        xhr.open('GET', '/getTodos');
        xhr.onload = function() {
          return self.todos = JSON.parse(xhr.responseText);
        };
        return xhr.send();
      },
      addTodo: function() {
        var text;
        text = this.newTodo.trim();
        this.todos.push({
          text: text
        });
        if (text) {
          this.newTodo = '';
        }
        return updateTodos(this.todos);
      },
      removeTodo: function(index) {
        this.todos.splice(index, 1);
        return updateTodos(this.todos);
      }
    }
  };

  todo = new Vue(todo_content);

}).call(this);
