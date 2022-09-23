let listItems=document.querySelectorAll("li");
let show=document.querySelector("#show");
let tempList=[23,32,34,40,27,24,30]
listItems.forEach((el,index)=>{
    el.dataset.temperature=Math.floor(Math.random()*45)
    el.addEventListener("click",()=>{
        alert(el.dataset.content)
    })
})
console.log(listItems[2].dataset.content)

show.addEventListener("click",()=>{
    listItems.forEach(e=>{
        console.log("list:"+e.dataset.id+" "+e.dataset.temperature)
        if(Number(e.dataset.temperature)<25){
            e.classList.add("blue")
        }
        else{
            e.classList.add("red")
        }
    })
})

let osoba=document.querySelectorAll("input")
let add=document.querySelector("#add");
let prazan=document.getElementById("empty")

function Person(name,surname,age){
    this.name=name,
    this.surname=surname,
    this.age=age
}

Person.prototype.getFullData=function(){
    return this.name+" "+this.surname+" "+this.age
}

function resetInputValue(){
    osoba[0].value="";
    osoba[1].value="";
    osoba[2].value="";
}

add.addEventListener("click",()=>{
    if(osoba[0].value!="" &&osoba[1].value!=""&&osoba[2].value!=0){
         let newPerson=new Person(osoba[0].value,osoba[1].value,osoba[2].value)
    console.log(newPerson.getFullData())
    resetInputValue();
    let noviDiv=document.createElement("div");
    noviDiv.innerHTML=newPerson.getFullData();
    noviDiv.addEventListener("click",()=>{
        noviDiv.classList.toggle("red")
    })
    prazan.appendChild(noviDiv)
    }
   else alert("You have empty field")
})