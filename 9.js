// classlist

const sectionTodo = document.querySelector(".section-todo")

console.log(sectionTodo);

// for class how many classses

console.log(sectionTodo.classList);

sectionTodo.classList.add("bg-dark");

console.log(sectionTodo.classList);

sectionTodo.classList.remove("container")

console.log(sectionTodo.classList);

// toggle 
// agr class ha tw add kr da ga ni tw remove kr da ga
sectionTodo.classList.toggle("container") // ya ni ha tw add 
sectionTodo.classList.toggle("bg-dark") // ya tw remove kr da ga

