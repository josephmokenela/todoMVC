var todoList = {
  todos: [],
  displayTodos: function() {
  if (this.todos.length == 0) {
    console.log('Your Todo list is empty! ');
  } else {
   console.log('My Todos: ');
   for (var i = 0; i < this.todos.length; i++) {
    if (this.todos[i].completed === true){ 
     console.log('(x) ', this.todos[i].todoText); 
   } else {
     console.log('( ) ', this.todos[i].todoText);
    } 
   }
}
},
  addTodos: function(todoText) {
  this.todos.push({
   todoText: todoText,
   completed: false
});
  this.displayTodos();
},
 changeTodo: function(position, todoText) {
  this.todos[position].todoText = todoText;
  this.displayTodos();
}, 
 deleteTodo(position) {
  this.todos.splice(position, 1);
  this.displayTodos();
},
  toggleCompleted: function(position) {
   var todo = this.todos[position];
   todo.completed = !todo.completed;
   this.displayTodos();
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
       this.displayTodos();
  }
};

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodos: function() {
    var todoText = document.getElementById('addTodoTextInput');
    todoList.addTodos(todoText.value);
    todoText.value = '';
  },
  changeTodo: function() {
    var todoTextPosition = document.getElementById('changeTodoPositionInput')
    var todoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(todoTextPosition.valueAsNumber, todoTextInput.value);
    todoTextPosition.value = '';
    todoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoInput = document.getElementById('changeTodoTextInput');
    todoList.deleteTodo(deleteTodoInput.valueAsNumber);
    deleteTodoInput.value = '';

  }, 
  toggleCompleted: function() {
    var toggleCompletedInput = document.getElementById('toggleCompletedInput');
    todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
    toggleCompletedInput.value = '';
  }
};

var view = {
  displayTodos: function() {

     var todoUl =  document.querySelector('ul');
     todoUl.innerHTML = '';

    for(var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      todoUl.appendChild(todoLi);
    }
    
  }
};