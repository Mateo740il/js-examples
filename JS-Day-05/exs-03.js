let ime= document.getElementById("name");
let prezime= document.getElementById("lastNaame");
let godine= document.getElementById("age");
let button=document.getElementById("gumb");
let showPerson=document.getElementById("show");
let persons=[];

function CreatePerson(name,lastName,age){
    this.name=name,
    this.lastName=lastName,
    this.age=age
};

CreatePerson.prototype.getFullPerson=function(){
    return this.name+" "+this.lastName+" "+this.age
}

function resetValues(){
    ime.value="";
    prezime.value="";
    godine.value="";
}

button.addEventListener("click",()=>{
    let newPerson=new CreatePerson(ime.value,prezime.value,godine.value);
    persons.push(newPerson);
    newPerson="";
    resetValues();
});

showPerson.addEventListener("click",()=>{
    persons.forEach(el=>{
        if(el.age>=18){
            console.log(el.getFullPerson())
        }
    })
})