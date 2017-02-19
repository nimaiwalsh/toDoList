/*VERSION 3 - Move the functions into a ToDoList object */

var toDoList = {
    list: ['item 1', 'item 2', 'item 3'],
    displayToDos: function() {
        console.log(this.list);
    },
    
    addTodo: function(item) {
        this.list.push(item);  
    },
    
    changeTodo: function(position, newItem) {
        this.list[position] = newItem;
    },
    
    deleteTodo: function(position) {
        this.list.splice(position, 1);
        this.displayToDos();
    }
};

toDoList.deleteTodo(0);

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