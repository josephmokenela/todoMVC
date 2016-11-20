var todoList = {
  todos: [],
  addTodos: function(todoText) {
  this.todos.push({
   todoText: todoText,
   completed: false
});
},
 changeTodo: function(position, todoText) {
  this.todos[position].todoText = todoText;
}, 
 deleteTodo(position) {
  this.todos.splice(position, 1);
},
  toggleCompleted: function(position) {
   var todo = this.todos[position];
   todo.completed = !todo.completed;
},

   toggleAll: function(){
       var totalTodos = this.todos.length;
       var completedTodos = 0;
        for (var i = 0; i < totalTodos; i++) {
          if(this.todos[i].completed === true) {
              completedTodos++;
         }
        } 
     if (completedTodos === totalTodos) {
         for (var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = false;
     }
      } else {
          for (var i = 0; i <totalTodos; i++) {
             this.todos[i].completed = true;
     }
      }
  }
};

var handlers = {
  addTodos: function() {
    var todoText = document.getElementById('addTodoTextInput');
    todoList.addTodos(todoText.value);
    todoText.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var todoTextPosition = document.getElementById('changeTodoPositionInput')
    var todoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(todoTextPosition.valueAsNumber, todoTextInput.value);
    todoTextPosition.value = '';
    todoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoInput = document.getElementById('changeTodoTextInput');
    todoList.deleteTodo(deleteTodoInput.valueAsNumber);
    deleteTodoInput.value = '';
    view.displayTodos();

  }, 
  toggleCompleted: function() {
    var toggleCompletedInput = document.getElementById('toggleCompletedInput');
    todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
    toggleCompletedInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {

     var todoUl =  document.querySelector('ul');
     todoUl.innerHTML = '';

    for(var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todoUl.appendChild(todoLi);
    }
    
  }
};