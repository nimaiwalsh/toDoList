/* VERSION 7*/
var toDoList = {
    //Store toDos
    toDos: [],

    displayToDos: function () {
        if (this.toDos.length === 0) {
            console.log("You have no toDos");
        } else {
            for (var i = 0; i < this.toDos.length; i++) {
                //show completed toDos
                if (this.toDos[i].completed === true) {
                    console.log('(x)', this.toDos[i].todoText);
                } else {
                    console.log("( )", this.toDos[i].todoText);
                }
            }
        }
    },

    //Create objects for toDos.
    addTodo: function (toDoText) {
        this.toDos.push({
            todoText: toDoText,
            completed: false
        });
        this.displayToDos();
    },

    //Change the toDoText property
    changeTodo: function (position, todoText) {
        this.toDos[position].todoText = todoText;
        this.displayToDos();
    },

    //toggleAll
    toggleAll: function () {
        var totalToDos = this.toDos.length;
        var completedToDos = 0;
        //Find number of completed toDos
        for (var i = 0; i < totalToDos; i++) {
            if (this.toDos[i].completed === true) {
                completedToDos++;
            }
        }
        //Case 1: if everything is true make everything false
        if (completedToDos === totalToDos) {
            for (var i = 0; i < totalToDos; i++) {
                this.toDos[i].completed = false;
            }
            //Case 2: else make everything true     
        } else {
            for (var i = 0; i < totalToDos; i++) {
                this.toDos[i].completed = true;
            }
        }

        this.displayToDos();
    },

    //Toggle completed
    toggleCompleted: function (position) {
        var todo = this.toDos[position];
        todo.completed = !todo.completed;
        this.displayToDos();
    },

    //deleteToDo method
    deleteTodo: function (position) {
        this.toDos.splice(position, 1);
        this.displayToDos();
    }
};

var displayToDosBtn = document.getElementById('displayToDosBtn');
var toggleAllBtn = document.getElementById('toggleAllBtn');

displayToDosBtn.addEventListener('click', function () {
    toDoList.displayToDos();
});

toggleAllBtn.addEventListener('click', function () {
    toDoList.toggleAll();
});


/* VERSION 6*/
//1. toggleAll: if everything is true, make everything false 
//2. toggleAll: otherwise make everything true

//var toDoList = {
//    //Store toDos
//    toDos: [],
//    
//    displayToDos: function() {
//        if (this.toDos.length === 0) {
//            console.log("You have no toDos");
//        } else {
//            for (var i  = 0; i < this.toDos.length; i++) {
//                //show completed toDos
//                if (this.toDos[i].completed === true) {
//                    console.log('(x)', this.toDos[i].todoText);
//                } else {
//                    console.log("( )", this.toDos[i].todoText);
//                }
//            }
//        }        
//    }, 
//    
//    //Create objects for toDos.
//    addTodo: function(toDoText) {
//        this.toDos.push({
//            todoText: toDoText,
//            completed: false
//        });
//        this.displayToDos();
//    },
//    
//    //Change the toDoText property
//    changeTodo: function(position, todoText) {
//        this.toDos[position].todoText = todoText;
//        this.displayToDos();
//    },
//    
//    //toggleAll
//    toggleAll: function() {
//        var totalToDos = this.toDos.length;
//        var completedToDos = 0;
//        //Find number of completed toDos
//        for (var i = 0; i < totalToDos; i++) {
//            if (this.toDos[i].completed === true) {
//                completedToDos++;
//            }
//        }
//       //Case 1: if everything is true make everything false
//        if (completedToDos === totalToDos) {
//            for (var i = 0; i < totalToDos; i++) {
//                this.toDos[i].completed = false;    
//            } 
//        //Case 2: else make everything false     
//        } else {
//            for (var i = 0; i < totalToDos; i++) {
//                this.toDos[i].completed = true;    
//            }  
//        }
//        
//        this.displayToDos();
//    },
//    
//    //Toggle completed
//    toggleCompleted: function(position) {
//        var todo = this.toDos[position];
//        todo.completed = !todo.completed;
//        this.displayToDos();
//    },
//    
//    //deleteToDo method
//    deleteTodo: function(position) {
//        this.toDos.splice(position, 1);
//        this.displayToDos();
//    }
//};

//===================================

/*VERSION 5
1. displayToDos should show .todoText
2. displayToDos should tell you if toDos is empty
3. displayToDos should show .completed*/

//var toDoList = {
//    //Store toDos
//    toDos: [],
//    
//    displayToDos: function() {
//        if (this.toDos.length === 0) {
//            console.log("You have no toDos");
//        } else {
//            for (var i  = 0; i < this.toDos.length; i++) {
//                //show completed toDos
//                if (this.toDos[i].completed === true) {
//                    console.log('(x)', this.toDos[i].todoText);
//                } else {
//                    console.log('( )', this.toDos[i].todoText);
//                }
//            }
//        }        
//    }, 
//    
//    //Create objects for toDos.
//    addTodo: function(toDoText) {
//        this.toDos.push({
//            todoText: toDoText,
//            completed: false
//        });
//        this.displayToDos();
//    },
//    
//    //Change the toDoText property
//    changeTodo: function(position, todoText) {
//        this.toDos[position].todoText = todoText;
//        this.displayToDos();
//    },
//    
//    //Toggle completed
//    toggleCompleted: function(position) {
//        var todo = this.toDos[position];
//        todo.completed = !todo.completed;
//        this.displayToDos();
//    },
//    
//    //deleteToDo method
//    deleteTodo: function(position) {
//        this.toDos.splice(position, 1);
//        this.displayToDos();
//    }
//};


//======================================

/*VERSION 4 -
1. toDoList.addTodo should add objects.
2. toDoList.changeTodo should change the toDoText property
3. toDoList.toggleCompleted should change the completed property*/

//var toDoList = {
//    //Store toDos
//    toDos: [],
//    
//    displayToDos: function() {
//        console.log(this.toDos);
//    }, 
//    
//    //Create objects for toDos.
//    addTodo: function(toDoText) {
//        this.toDos.push({
//            todoText: toDoText,
//            completed: false
//        });
//        this.displayToDos();
//    },
//    
//    //Change the toDoText property
//    changeTodo: function(position, todoText) {
//        this.toDos[position].todoText = todoText;
//        this.displayToDos();
//    },
//    
//    //Toggle completed
//    toggleCompleted: function(position) {
//        var todo = this.toDos[position];
//        todo.completed = !todo.completed;
//        this.displayToDos();
//    },
//    
//    //deleteToDo method
//    deleteTodo: function(position) {
//        this.toDos.splice(position, 0 );
//        this.displayToDos();
//    }
//};

// ===========================================

///*VERSION 3 - Move the functions into a ToDoList object */
//
//var toDoList = {
//    //Store toDos
//    list: ['item 1', 'item 2', 'item 3'],
//    displayToDos: function() {
//        console.log(this.list);
//    },
//    
//    //addTodo method
//    addTodo: function(item) {
//        this.list.push(item);  
//    },
//    
//    //changeTodo method
//    changeTodo: function(position, newItem) {
//        this.list[position] = newItem;
//    },
//    
//    //deleteToDo method
//    deleteTodo: function(position) {
//        this.list.splice(position, 1);
//    }
//};
//
//toDoList.addTodo('New item');
//toDoList.deleteTodo(0);
//toDoList.displayToDos();

//===============================================

///*VERSION 2*/
////A place to store the ToDos
//var toDoList = ['item 1', 'item 2', 'item 3'];
//
////2. It should have a function to display toDos
//function displayTodos() {
//    console.log('To Do List:', toDoList);
//}
//
////3. It should have a function to add new toDos
//function addTodo(item) {
//    toDoList.push(item);
//    displayTodos();
//}
//
////4. It should have a function to change a toDo
//function changeTodo(position, newItem) {
//    toDoList[position] = newItem;
//    displayTodos();
//}
//
////5. It should have a function to delete a toDO
//function deleteTodo(position) {
//    toDoList.splice(position, 1); 
//    displayTodos();
//}