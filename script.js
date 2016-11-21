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

        this.todos.forEach(function(todo)  {
          if (todo.completed === true) {
            completedTodos++;
          }
        });

     this.todos.forEach(function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      }else {
        todo.completed = true;
      }
     });
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
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
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

      todoList.todos.forEach(function(todo, position) {
          var todoLi = document.createElement('li');
          var todoTextWithCompletion = '';

          if (todo.completed) {
            todoTextWithCompletion = '(x) ' + todo.todoText;
          } else {
            todoTextWithCompletion = '( ) ' + todo.todoText;
          }

          todoLi.id = position;
          todoLi.textContent = todoTextWithCompletion;
          todoLi.appendChild(this.createDeleteButton());
          todoUl.appendChild(todoLi);
      }, this);
    
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';

    return deleteButton;
  },
  setUpEventListeners: function() {
          var todosUl = document.querySelector('ul');
          todosUl.addEventListener('click', function(event) {

          // Get the element that was clicked on
          var itemClicked = event.target;

          // Check if the item cliekced is the delete button

          if (itemClicked.className === 'deleteButton') {
            handlers.deleteTodo(parseInt(itemClicked.parentNode.id));
          }
      });
  }
};

view.setUpEventListeners();

