// event bubbling / event propagation
// event capturing
// event delegation


// event bubbling / event propagation
// ak elemt pa click kiya agr us ka parent pa b event laga ha tw how b call how gy ga

const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

child.addEventListener('click',()=>{
    console.log("bubbe !!!! on a child");
})

parent.addEventListener('click',()=>{
    console.log("bubbe !!!! on a parent");
})

grandparent.addEventListener('click',()=>{
    console.log("bubbe !!!! on a grandparent");
})

document.body.addEventListener('click',()=>{
    console.log("bubbe !!!! on a document.body");
})

// event capturing
// ak third value how gi jo ka boolen how gi jo batya ga ka capture krna ha ka ni capture krna

child.addEventListener('click',()=>{
    console.log("capture !!! on a child");
},true)

parent.addEventListener('click',()=>{
    console.log("capture !!! on a parent");
},true)

grandparent.addEventListener('click',()=>{
    console.log("capture !!! on a grandparent");
},true)

document.body.addEventListener('click',()=>{
    console.log("capture !!! on a document.body");
},true)


// phaly capturing how gi phir bubbling how gi 

