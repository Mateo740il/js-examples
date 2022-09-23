let obj={
    firstName:"Mateo",
    lastName:"Bukić",
    age:25,
    hobies:["training","walking","cars"]
};

let x=6;
let y=2;
let z=0;

if(obj.age<18){
    console.error("you are to young")
}

console.log(obj.firstName,obj.lastName);
console.log(obj.hobies.join(","))

console.log(x%=y);
console.log(z&&=y);
console.log(z||=y);
