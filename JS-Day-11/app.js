// function CreatePerson(name,suername,age,position){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(this.firstName=name,
//                     this.lastName=suername,
//                     this.age=age,
//                     this.position=position)
//         },2000)
//     })
// }

// CreatePerson.prototype.getFullData=function(){
//     return`Name:${this.firstName}\nSurname:${this.lastName}\nAge:${this.age}\nPostion:${this.position}`
// }


function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Fetch User...")
        },2000)
    })
}

function nameUser(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Mateo")
        },2000)
    })
}

function surname(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Bukić")
        },500)
    })
}

function age(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("26")
        },500)
    })
}

function position(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Junior Frontend developer")
        },500)
    })
}

function favoritePokemon(){
     return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(
                fetch(`https://pokeapi.co/api/v2/pokemon/17`)
                .then(res=>res.json())
                .then(data=>data.name)
            )
        },500)
    })
}

function pokemonSprites(){
     return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(
                fetch(`https://pokeapi.co/api/v2/pokemon/17`)
                .then(res=>res.json())
                .then(data=>data.sprites.back_default)
            )
        },500)
    })
}



async function getData(){
    let mess=await fetchUser();
    document.querySelector("p").innerText=mess
    let userName=await nameUser();
    document.querySelector("p").innerText=""
    document.querySelector("#name").innerText=userName
    let suername=await surname();
    document.querySelector("#lastname").innerText=suername
    let userAge=await age();
    document.querySelector("h2").innerText="Age: "+userAge
    let role=await position();
    document.querySelector("h3").innerText=role
    let pokemon=await favoritePokemon();
    document.querySelector("h4").innerText=pokemon
    let pokemonPhoto=await pokemonSprites();
     document.querySelector("img").src=pokemonPhoto
}

getData();

// fetch(`https://pokeapi.co/api/v2/pokemon/${random}`
