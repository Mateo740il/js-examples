let polje=[1,2,4,6,8,23,45,89,78];
let novoPolje=[...polje,77,45,65,54,22,31];
let emptyArray=[];

console.log(novoPolje);
console.log(novoPolje.at(-1));

const person1={
    name:"Matt",
    age:32,
    position:"frontend-developer"
};

const person2={
    name:"Luke",
    age:24,
    position:"backend-developer"
};

let beer=(person1.age>18 && person2.age>18)?person1.name+" you ana "+person2.name+" can get a beer": person1.name+" no beer for you and "+person2.name;
console.warn(beer);

let greeting="hello world";

function cobine(){
    let massage="hi";
    console.log(massage + " " + greeting);
}

cobine();
// console.log(massage);{}[]

let contacts=new Map();
contacts.set("Mateo",{age:25,position:"frontend-developer",phone:131231412});
contacts.set("Ivan",{age:29,position:"backend-developer",phone:82182091});
contacts.set("Luka",{age:34,position:"fullstack-developer",phone:14141213});

// contacts.delete("Ivan");
let brisi=(contacts.has("Ivan"))?contacts.delete("Ivan"):console.log("Nema Ivana u mapi ");

console.log(contacts);
console.log(brisi);

for(let i=0;i<10;i++){
    emptyArray.push(i)
};
console.log(emptyArray);