let pokemonCards=document.querySelector(".pokemonCards");
let pokemonPhoto=document.querySelector(".pokemon");

const fetchPokemon=async()=>{
    let response=await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    let pokemons=await response.json();
    createPokemonCards(pokemons);
}

const createPokemonCards=(pokemons)=>{
    pokemons.results.forEach(pokemon => {
        let pokemonCard=document.createElement("div")
        pokemonCard.classList.add("pokemonCard")
        pokemonCard.innerHTML=`<h2>${pokemon.name}</h2>`
        pokemonCards.appendChild(pokemonCard)
        pokemonCard.addEventListener("click",()=>{
            fetchPokemonInfo(pokemon)
             window.scroll({
                    top: 10,
                    left: 10,
                    behavior: 'smooth'
                });
        })
    });
}

const fetchPokemonInfo=async(pokemon)=>{
    pokemonPhoto.innerHTML=""
    let res=await fetch(pokemon.url)
    let pokemonInfo=await res.json()
    let pokemonInfoTemplate=document.createElement("div")
    pokemonInfoTemplate.innerHTML=`<img src=${pokemonInfo.sprites.back_default}></img>`
    pokemonPhoto.appendChild(pokemonInfoTemplate)
}


fetchPokemon()

