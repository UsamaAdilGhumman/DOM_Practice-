// how to get dimention of element

// height width

const sectionTodo = document.querySelector(".section-todo")
const info = sectionTodo.getBoundingClientRect();
console.log(info);