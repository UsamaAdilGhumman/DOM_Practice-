// clone nodes

const ul = document.querySelector(".todo-list")
console.log(ul);
const li = document.createElement("li")
li.textContent = "new todo"
const li2 = li.cloneNode(true);
console.log(li);
ul.append(li)
console.log(ul);
ul.prepend(li)
console.log(ul);
ul.prepend(li2);


// agr apna ak li create ki ha tw us ko ya tw append kr skta ha ya phir prepend kr skta ha dono kam ni kr skta is liya hama 
// clone node krna howta ha
// clonenode(true) in above example
