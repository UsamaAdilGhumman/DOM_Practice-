// event delegation
const grandparent = document.querySelector(".grandparent")

grandparent.addEventListener('click',(e)=>{
    console.log(e.target);
})

// event delegation matlb ka ham alag alag event bana ji jaha ak hi event bana skta ha 
// e.target hama batya ga ka hamna konsa box pa click kiya ha 

