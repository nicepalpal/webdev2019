var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy"
];


//for loop - usually this
for (var i=0; i < todos.length; i++){
  (todos[i] = todos[i] + "!");
}

//run array methods on arrays not strings - length will change which effects the loop

for (var i=0; i < todos.length; i++){
  todos.pop();
}

//fix pop to use length as a variable

var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {todos.pop();}

//while loops

var counterOne = 10
while(counterOne > 0) {
  console.log(counterOne);
  counterOne--;
}

//do while loops - diference is the do while runs first

var counterTwo = 10;
do {
  console.log(counterTwo);
  counterTwo--;
} while (counterTwo > 0);

//for each (new in ECMA Script5) - each item in an array? - the function(i) represents what we want to do on each item
//allows you to not worry about array length
//caveat does not work on all browsers
var todosLength = todos.length;
for (var i=0; i < todos.length; i++){
  console.log(i);
}

todos.forEach(function(i){
  console.log(i);
})

//alternative - access the index

todos.forEach(function(todo, i){
  console.log(todo, i);
})

//using a pre-written function inside a forEach loops
function logTodos(todo, i){
  console.log(todo, i);
}

var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy"
];

var todosImportant = [
  "clean room!",
  "brush teeth!",
  "exercise!",
  "study javascript!",
  "eat healthy!"
];

todos.forEach(logTodos);
todosImportant.forEach(logTodos);
