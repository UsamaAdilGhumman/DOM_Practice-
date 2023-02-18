// DOM tree

// rootNode
const rootNode = document.getRootNode();
console.log(rootNode);

// childs node

console.log(rootNode.childNodes); // return NodeList which array like object

const htmlNode = rootNode.childNodes[0];

console.dir(htmlNode);

console.log(htmlNode);

// html elemnt childs

console.log(htmlNode.childNodes); // NodeList(3) [head, text, body]

// head 

const head = htmlNode.childNodes[0]
console.log(head);

// text
const text = htmlNode.childNodes[1]
console.log(text);


const body = htmlNode.childNodes[2]
console.log(body);


// parent node

console.log(head.parentNode);

// sibling nodes

console.log(head.nextSibling);
console.log(head.nextSibling.nextSibling);


// contant in text
console.log(head.nextSibling.textContent);
console.log(head.nextSibling); // "\n   "


// ignore text node 

console.log(head.nextElementSibling);

// task select h1 and go to parent body and change background color
const h1 = document.querySelector("h1")
console.log(h1);
console.log(h1.parentNode);
console.log(h1.parentNode.parentNode);
const taskbody = h1.parentNode.parentNode;
taskbody.style.backgroundColor = "pink";
taskbody.style.color = "red";



// direct select body

const directBody = document.body
console.log(document.body);

// queryselector ko ham head ma b use kr skta ha (document ki  jaha head and body ma b use kr skta ha)
const title = head.querySelector("title")
console.log(title);

// text ko ignore krna ka liya method ha childern

console.log(htmlNode.childNodes); // NodeList(3) [head, text, body]

console.log(htmlNode.children)  // HTMLCollection(2) [head, body] text ignore how gaya ha