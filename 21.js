// when click on button then change background color of body

const button = document.querySelector("button")
console.log(button);

const span = document.querySelector(".current-color")
console.log(span);

const body = document.body
console.log(body);

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;

}
 button.addEventListener("click",function(){
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    span.textContent = randomColor;
 })