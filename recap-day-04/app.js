let register=document.getElementById("register");
let wrapper=document.querySelector(".wrapper")
let msgPlace=document.querySelector("#msg")

const handleSubmit=async(event)=>{
    event.preventDefault();
     let fetchingPokemon=await fetching();
     msgPlace.innerHTML=fetchingPokemon;
     let pokemonMsg=await pokemonDOM();
     msgPlace.innerHTML=pokemonMsg;
    const formData=new FormData(register)
    formData.forEach((value,key)=>{
        console.log(key,value);
    })
    try{
        let res=await fetch(`https://pokeapi.co/api/v2/pokemon/${formData.get("pokemonName")}`)
        let resJson=await res.json()
        console.log(resJson);
        showPokemonInDOM(resJson)
    }catch(error){
        console.log(error);
    }

}

const fetching=()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
             resolve("Fetching pokemon ....")
        },1000)
    })
}


const pokemonDOM=()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
             resolve("Pokemon:")
        },1000)
    })
}



const showPokemonInDOM=(pokemon)=>{
    const pokemonTemplate=`
        <article>
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.back_default}"
        </article>
    `
    wrapper.insertAdjacentHTML("beforeend",pokemonTemplate)
}

register.addEventListener("submit",handleSubmit)
