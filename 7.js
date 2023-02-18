// innerHTML
const headline = document.querySelector(".headline")
console.log(headline);

console.log(headline.innerHTML);

headline.innerHTML = "<h1>Hello World</h1>"

console.log(headline.innerHTML);

headline.innerHTML += "<button class=\"btn\">learn more </button>"

console.log(headline.innerHTML);



