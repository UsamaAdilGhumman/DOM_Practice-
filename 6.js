// loop
// array like object -> index, length property
const NavItems = document.getElementsByClassName("nav-item")
const atags = document.getElementsByTagName("a")
console.log(atags);
// htmlcollection can use foreach method.

for(let value of atags){
    console.log(value);
    // const navitem = value;
    value.style.backgroundColor="white";
    value.style.color="green";
    value.style.fontSize="20px";
    value.style.fontWeight="bold";
}

// Arrary.from() -> change to Array



let atag = document.querySelectorAll("a") // nodelist 
for(let value of atag){
    console.log(value);
    // const navitem = value;
    value.style.backgroundColor="blue";
    value.style.color="red";
    value.style.fontSize="20px";
    value.style.fontWeight="bold";
}

console.log("isArray : ",Array.isArray(atag));
atag = Array.from(atag);
console.log("isArray : ",Array.isArray(atag));