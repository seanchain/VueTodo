updateTodos = (elem) ->
  poststuff =
    url: '/modify'
    type: 'POST'
    data:
      content: elem
  request = $.ajax poststuff
  request.done (msg) ->
    console.log msg
  request.fail (jqXHR, textStatus) ->
    console.log textStatus

todo_content =
  el: '#todo'
  data:
    newTodo: ''
    todos: []
  created: ->
    this.fetchData()
  methods:
    fetchData: ->
      xhr = new XMLHttpRequest()
      self = this
      xhr.open 'GET', '/getTodos'
      xhr.onload = ->
        self.todos = JSON.parse xhr.responseText
      xhr.send()
    addTodo: ->
      text = this.newTodo.trim()
      this.todos.push {text: text}; this.newTodo = '' if text
      updateTodos this.todos
    removeTodo: (index) ->
      this.todos.splice(index, 1)
      updateTodos this.todos

todo = new Vue todo_content
