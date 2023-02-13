// DOM
// Document Object Model
// overview
// use
// deep study

console.warn("!!!!! document !!!!!");
// Human readable
console.log(document);
// Js Object
console.dir(document);


// selectors
console.warn("!!!!! select element using get element by id !!!!!");
// select element using get element by id
console.log(document.getElementById("main-heading"));
console.dir(document.getElementById("main-heading"));

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

console.warn("!!!!! select element using query selector !!!!!");
// select element using query selector
// is sa kuch b select kr skta ha
// phala mil gy ga tw agy check ni krra ga
const mainHeading1 = document.querySelector("#main-heading");
const header = document.querySelector(".header");
const navItem = document.querySelector(".nav-item");

console.log(mainHeading1);
console.log(header);
console.log(navItem);

console.warn("!!!!! select element using query selectorAll !!!!!");
// sara ka sara elements same class wala a gy ga
const navItems = document.querySelectorAll(".nav-item");
console.log(navItems);
