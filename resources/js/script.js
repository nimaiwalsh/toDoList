/*App requirements
1. It should have a place to store toDos
2. It should have a way to display toDos
3. It should have a way to add new toDos
4. It should have a way to change a toDo
5. It should have a way to delete a toDO
*/

//Store toDo's
var toDos = ['item 1', 'item 2', 'item 3'];

//Display toDO's
console.log('Mymy toDos:', toDos);

//Add toDo's to the array
toDos.push('item 4');

//Change toDos
toDos[3] = 'item 4 updated';

//Delete a toDo
toDos.splice(1, 1);
console.log(toDos)