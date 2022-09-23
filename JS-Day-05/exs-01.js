let ime =document.getElementById("name");
let prezime =document.getElementById("surname");
let button=document.getElementById("gumb");

function Person(name,lastName){
    this.name=name,
    this.lastName=lastName
}

button.addEventListener("click",function(){
    let newPerson=new Person(ime.value,prezime.value)
    console.log(newPerson.name+" "+newPerson.lastName)
    ime.value="";
    prezime.value="";
})


// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// Person.prototype.fullName = function () {
//   return this.name + " " + this.surname;
// };

// let p = new Person();
// p.name = "Milivoj";
// p.surname = "Bilic";
// console.log(p.fullName());