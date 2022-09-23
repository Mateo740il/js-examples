const data={
    root:null,
    rootMargin:"0px",
    threshold: 0.5
}

const callback=(entries=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active")
            createPokemon(entry)
            obervation.unobserve(entry.target)
        }
        else entry.target.classList.remove("active")
    });
})

let obervation=new IntersectionObserver(callback,data)

let sections=document.querySelectorAll("section");

sections.forEach(section=>{
    obervation.observe(section)
})

function createPokemon(response){
    let random=Math.floor(Math.random()*200);
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then(res=>res.json())
    .then(pokemon=>{
        let photo=document.createElement("img")
        photo.src=pokemon.sprites.back_default
        let name=document.createElement("h1")
        name.innerText=pokemon.name
        // response.target.innerHTML=`
        // <h2>${pokemon.name}</h2>
        // <img src="${pokemon.sprites.back_default}"/>
        // `
        response.target.appendChild(name)
        response.target.appendChild(photo)
    })
}

document.getElementById("btn").addEventListener("click",()=>{
    window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
})

