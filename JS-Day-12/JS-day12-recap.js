class Cars{
    constructor(mark,model,year){
        this.mark=mark,
        this.model=model,
        this.year=year
    }

}

const CarData=(car)=>
class extends car{
     get fullData(){
        return `${this.owner}'s Car: ${this.mark} ${this.model} ${this.year} 🏎`
    }
}

class JDM extends CarData(Cars){
    constructor(mark,model,year,owner){
        super(mark,model,year)
        this.owner=owner
    }
}

let myCar=new JDM("toyota","JZX90",1992,"Mateo");

function fetching(){
    return new Promise((resovle=>{
        setTimeout(()=>{
            resovle("Fetcing data...")
        },2000)
    }))
}

function carInfo(){
    return new Promise((resovle=>{
        setTimeout(()=>{
            resovle( document.querySelector("p").innerHTML=myCar.fullData)
        },2000)
    }))
}

async function show(){
    let mess=await fetching();
    document.querySelector("p").innerText=mess
    await carInfo();

}

show();
