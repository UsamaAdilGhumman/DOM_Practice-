// complete project todo list

const todoform = document.querySelector(".from-todo");
console.log(todoform);
const textfield = document.querySelector(".from-todo input[type='text']");
console.log(textfield);
const ul = document.querySelector(".todo-list");
console.log(ul);

todoform.addEventListener("submit", (e) => {
  e.preventDefault(); // page ko refresh hona sa rokna ka liya use how ga
  console.log(textfield.value);
  const newItemText = textfield.value;
  const newItem = document.createElement("li");
  const newInnerHTML = `<span class="text">${newItemText}</span>
    <div class="todo-bottons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
  newItem.innerHTML = newInnerHTML;
  console.log(newItem);
  ul.append(newItem);
  textfield.value = "";
});

ul.addEventListener('click',(e)=>{
    console.log(e.target.classList);
    // if user clicked on done button 
    if(e.target.classList.contains('done')){
        console.log("you want to done this");
        console.log(e.target.parentNode.previousElementSibling);
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
        const buttons = e.target.parentNode;
        console.log(buttons);
        buttons.remove();
    }
    // if user clicked on remove button 
    if(e.target.classList.contains('remove')){
        console.log("you want to remove this");
        console.log(e.target.parentNode.parentNode);
        const targetLi = e.target.parentNode.parentNode;
        targetLi.remove();
    }
})