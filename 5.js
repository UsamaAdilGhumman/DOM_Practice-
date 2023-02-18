// get multiple elements by get element by class name
// get multiple elements by query selector All
const NavItems = document.getElementsByClassName("nav-item") // HTml Collection which is not array. it is array like object
console.log(NavItems);
console.log(NavItems[0]);


const navItem = document.querySelectorAll(".nav-item") // nodelist 
console.log(navItem);
console.log(navItem[0]);
