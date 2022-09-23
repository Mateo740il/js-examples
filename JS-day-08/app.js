
function createPromise(x){
    return new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        if(x) resolve("Hello JS Day 8")
        else rejected("Nešto ne radi")
    },1000)
    
})
}

console.log(createPromise(false));

// promise01.then((res)=>console.log(res))
// .catch((err)=>console.error(err));

let users=fetch("https://jsonplaceholder.typicode.com/users")
console.log(users)