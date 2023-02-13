// get and set attributes

const link = document.querySelector("a");
console.log(link.getAttribute("href"));
// #home a raha ha mujy bs home chaya
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href","https://www.google.com")
console.log(link.getAttribute("href"));

const input = document.querySelector(".from-todo input");
console.log(input.getAttribute("type"));