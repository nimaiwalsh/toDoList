/*VERSION 4 - */
//1. toDoList.addTodo should add objects.
//2. toDoList.changeTodo should change the toDoText property
//3. toDoList.toggleCompleted should change the completed property
var toDoList = {
    //Store toDos
    toDos: [],
    
    displayToDos: function() {
        console.log(this.toDos);
    }, 
    
    //Create objects for toDos.
    addTodo: function(toDoText) {
        this.toDos.push({
            todoText: toDoText,
            completed: false
        });
        this.displayToDos();
    },
    
    //Change the toDoText property
    changeTodo: function(position, todoText) {
        this.toDos[position].todoText = todoText;
        this.displayToDos();
    },
    
    //Toggle completed
    toggleCompleted: function(position) {
        var todo = this.toDos[position];
        todo.completed = !todo.completed;
        this.displayToDos();
    },
    
    //deleteToDo method
    deleteTodo: function(position) {
        this.toDos.splice(position, 0 );
        this.displayToDos();
    }
};

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