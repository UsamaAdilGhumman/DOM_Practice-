// practice with event

const allButton = document.querySelectorAll(".my-button button")

console.log(allButton);
allButton.forEach(button => {
    button.addEventListener('click',function(event){
        console.log("you clicked me !!!!");
        event.target.style.backgroundColor = 'yellow'
        event.target.style.color = 'grey'
    })
});