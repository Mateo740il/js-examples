let marke=document.getElementById("marka");
let model=document.getElementById("model");
let godina=document.getElementById("godina");
let snaga=document.getElementById("hp");
let add=document.getElementById("add");
let show=document.getElementById("show");
let cars=[];

function createCar(carName,carModel,carYear,carHp){
    this.carName=carName,
    this.carModel=carModel,
    this.carYear=carYear,
    this.carHp=carHp
};

createCar.prototype.getFullSpec=function(){
    return this.carName+" "+this.carModel+" "+this.carYear+" "+this.carHp
}

function displayCarSpec(owner){
    console.log(owner +" "+ this.carName+" "+this.carModel+" "+this.carYear+" "+this.carHp)
}

function resetValue(){
    marke.value="";
    model.value="";
    godina.value="";
    snaga.value="";
}

add.addEventListener("click",()=>{
    let newCar=new createCar(marke.value,model.value,godina.value,snaga.value);
    cars.push(newCar);
    console.log(displayCarSpec.call(newCar,"marko"))
    console.log(displayCarSpec.apply(newCar,["IVAN"]))
    newCar="";
    resetValue();
})

show.addEventListener("click",()=>{
    cars.forEach(el=>{
        if(el.carYear<2000){
            console.log(el.getFullSpec())
        }
        else{
            console.log("boring car is "+el.getFullSpec())
        }
    })
})

