// this keyword


// arrow functions ka case ma this ki value window how gi
// normal function ka case ma wo element khud this ki value how gi


const btn = document.querySelector(".btn-headline")
btn.addEventListener("click",function(){
    console.log("You Clicked me !!!!!!");
    console.log(this);
})
