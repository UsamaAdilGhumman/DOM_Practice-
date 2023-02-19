// keypress event 
// mouseover event
// mouseleave

// puri body ma khi pa b key press how tw wo deakhna ka liya
const body = document.body;

body.addEventListener('keypress',(e)=>{
    console.log(e.key);
})


const myButton = document.querySelector(".btn-headline")

myButton.addEventListener("mouseover",()=>{
    console.log("mouseover event occur");
})

myButton.addEventListener("mouseleave",()=>{
    console.log("mouseleave event occur");
})
