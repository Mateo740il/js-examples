let mark =document.getElementById("car");
let model =document.getElementById("model");
let hp=document.getElementById("hp");
let button=document.getElementById("gumb");
let showCars=document.getElementById("show");
let cars=[];

function CreateCar(mark,model,horsepower){
    this.mark=mark,
    this.model=model,
    this.horsepower=horsepower
};

CreateCar.prototype.carModel=function(){
    return this.mark+ "-" +this.model+ "[" +this.horsepower+"]"
}

button.addEventListener("click",()=>{
    let newCar=new CreateCar(mark.value,model.value,hp.value);
    cars.push(newCar);
    newCar="";
    mark.value="";
    model.value="";
    hp.value="";
});

showCars.addEventListener("click",()=>{
    cars.forEach(el=>{
        console.log(el.carModel());
    })
})