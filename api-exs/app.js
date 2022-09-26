let empty=document.querySelector(".wrapper");
let add=document.getElementById("add");

add.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*300)
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then(res=>res.json())
    .then(data=>createPokemon(data))
})

function createPokemon(response){
    let novi=document.createElement("div");
    novi.innerHTML=`<h2>Name: ${response.name}</h2>
                    <p>ID: ${response.id}</p>
                    <img src="${response.sprites.back_default}"/>
                    `
    novi.setAttribute("class","hero")
    empty.appendChild(novi);
}

