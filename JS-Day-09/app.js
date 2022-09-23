let poki=document.getElementById("pokemon")
let div=document.getElementById("data")
let slika=document.getElementById("slika")
let random=Math.floor(Math.random()*150)

function loading(){
    return new Promise(resolve=>resolve("Fetching data..."))
}

function fetchMessage(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("hello JS Day 09")
        },2000)
    })
}

function fetchUser(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("User:mate740il")
        },2000)
    })
}

function pokemon(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then(res=> res.json())
    .then(pokemon=>{
        pokemonInfo(pokemon)
       
    })
}

function pokemonInfo(data){
     poki.innerHTML=data.name
    slika.src=data.sprites.front_default
}
 
pokemon();


async function Hello(){
    let l=await loading();
    div.innerHTML=l;
    let a=await fetchMessage();
    div.innerHTML=a;
    let b=await fetchUser();
    div.innerHTML=b;
    
}

Hello();