saveFunc = (elem) ->
  poststuff =
    url: 'http://localhost:3000/save'
    type: 'POST'
    data:
      content: 'elem'
  request = $.ajax poststuff
  request.done (msg) ->
    console.log msg
  request.fail (jqXHR, textStatus) ->
    console.log textStatus

loadTodos = ->
  todos = [{text: 'First todo'}, {text: 'Second todo'}]

todo_content =
  el: '#todo'
  data:
    newTodo: '',
    todos: loadTodos()
  methods:
    addTodo: ->
      text = this.newTodo.trim()
      this.todos.push {text: text}; this.newTodo = '' if text
      saveFunc text

    removeTodo: (index) ->
      this.todos.splice(index, 1)
      saveFunc text
todo = new Vue todo_content
