// static list vs live list

// querySelectorAll hama static list da gi 
// getElementby (className,id,tagName,etc) hama live list da gi

const listItems = document.querySelectorAll(".todo-list li")
const sixthli = document.createElement("li")
sixthli.textContent = "item 6"
const ul = document.querySelector(".todo-list")
ul.append(sixthli)
console.log(listItems);

const listItems1 = ul.getElementsByTagName("li")
console.log(listItems1);