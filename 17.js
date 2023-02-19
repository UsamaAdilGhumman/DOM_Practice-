// click event in multiple buttons

// one button click event
const firstButton = document.querySelector("#one")
console.log(firstButton);
firstButton.addEventListener('click',function(){
    console.log("You clicked me !!!!!");
})


const allButton = document.querySelectorAll("button")
console.log(allButton);


for (const button of allButton) {
    button.addEventListener("click",function(){
        console.log("You clicked me !!!!!");
        console.log(this);
        console.log(this.textContent);
    })
}
