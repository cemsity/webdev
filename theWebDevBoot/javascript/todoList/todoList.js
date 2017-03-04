//add functions
var todos = [];
var input = prompt("What do you want to do?");

while (input !== "quit") {
    if (input === "add") {
        addTodo();
    } else if (input === "list") {
        listTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("What do you want to do?");
}

function addTodo() {
    var addTodo = prompt("New todo:");
    todos.push(addTodo);
}

function listTodo() {
    console.log("*-*-*-*-*")
    todos.forEach(function(todo, index) {
        console.log(index + " : " + todo);
    });
}

function deleteTodo() {
    var index = prompt("enter number to delete");
    todos.splice(index, 1);
}
