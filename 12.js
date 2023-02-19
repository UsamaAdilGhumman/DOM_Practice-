// old method to add html
// appendchild
// insertbefore
// replacedchild
// removechild


// appendchild
const ul = document.querySelector(".todo-list")
const li = document.createElement("li")
li.textContent = "new todo"

ul.appendChild(li);

// insertbefore
const referenceNode = document.querySelector(".first-todo")
ul.insertBefore(li,referenceNode)


// replacedchild
ul.replaceChild(li,referenceNode)


// removechild
ul.removeChild(li)