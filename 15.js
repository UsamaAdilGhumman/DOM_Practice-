// intro to events

// click
// button press
// hover

// event add krna ki 3 tarkia ha
// 1) add event direct in html file
// 2) us element ko slelect kr ka us ki event property ma event assign krna
// 3) addEventListener

// 2 method
// const btn = document.querySelector(".btn-headline")
// btn.onclick = function(){
//     console.log("You Clicked me !!!!!!");
// }

// console.log(btn);
// console.dir(btn);

// 3rd method
const btn = document.querySelector(".btn-headline")
function clickMe(){
    console.log("You Clicked me !!!!!!");
}
btn.addEventListener("click",()=>{
    console.log("You Clicked me !!!!!!");
})
