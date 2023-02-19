// event object

const firstButton = document.querySelector("#one")


// jab bhi kisi b element pa event listener add how ga
// js engine -> line by line
// browser -> js engine + webapi (extra feacture)

// jab browser ko pata chala ga ki user ne event perform kiya ha
// 1.  browser callback ko js engine ko da ga execute krna ka liya 
// 2. broser callback ka sath element ki information b da ga event ko
// ya info hama ak object mila gi

firstButton.addEventListener("click", function(event){
    console.log("You clicked me!!!!!");
    console.log(event);
})


const allButton = document.querySelectorAll("button")
console.log(allButton);


for (const button of allButton) {
    button.addEventListener("click",function(e){
        console.log(e.target);
    })
}
