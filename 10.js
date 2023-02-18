// add html using js


const todoList = document.querySelector(".todo-list")
console.log(todoList);

console.log(todoList.innerHTML);

todoList.innerHTML += "<li>New ToDo</li>"
todoList.innerHTML += "<li> ToDo new</li>"

console.log(todoList.innerHTML);

// when should use it , when should not
// inner html is not best bcz it render the elements and it slow the preformance

// innerhtml ko use kr skta ha jb html ma content chnage krna ko is alwa use ni krna ha 

// so, new method for add html in page


// document.createElement()
//  append
//  prepend
//  remove

const newTodoItem = document.createElement("li")
const newTodoItemText = document.createTextNode("My New Todo")
newTodoItem.append(newTodoItemText)
console.log(newTodoItem);
todoList.append(newTodoItem)

// append add in last 
// prepend add in first


const newTodoItem1 = document.createElement("li")
newTodoItem1.textContent = "1st todo"
todoList.prepend(newTodoItem1)


// remove html in page

const listItem = document.querySelector(".todo-list li")
listItem.remove();
console.log(listItem);


// before // slect element ka phaly add how gy ga
// after // select element ka bad add how gy ga

const newTodoItem2 = document.createElement("li")
newTodoItem2.textContent = "1st todo"
todoList.before(newTodoItem2)


// insertAdjacentHTML
// beforebegin
// afterbegin
// beforeend
// afterend

todoList.insertAdjacentHTML("beforeend","<li>I Love Apples</li>")


