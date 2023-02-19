
console.log("script start !!!!!");
// event behind the scene
const allButton = document.querySelectorAll(".my-button button")
console.log(allButton);

allButton.forEach(function(button){
    button.addEventListener("click", (e)=>{
        let num = 0;
        for(let i = 0;i<1000000000;i++){
            num+=i;
        }
        console.log(e.target.textContent,num);
    })
})

let outerVar = 0;
for(let i = 0;i<100000000;i++){
    outerVar+=i;
}
console.log("Value of outer ",outerVar);
console.log("script end !!!!!");