let empty=document.getElementById("empty");
let roll=document.getElementById("gumb");
let toss=0;
let max=0;

// let dice={
//     numberOfSides:6,
//     diceNummber:1
// };

function dice(numberOfSides, diceNummber) {
    this.numberOfSides = numberOfSides,
    this.diceNummber = diceNummber
}

dice.prototype.rollDice=function(){
    this.diceNummber=Math.floor(Math.random()*6+1)
    return this.diceNummber
}

function print(){
    let newRoll=new dice(6,1)
    return newRoll.rollDice()
}

roll.addEventListener("click",()=>{
    let result=print()
    empty.innerHTML=result
    toss+=1
    if(result>max){
        max=result
    }
    if(toss>=5){
        console.log(max)
        toss=0;
        empty.innerHTML="";
        if(max==6){
            console.log("you won")
        }
        else{
            console.log("you lost")
        }
        max=0;
    }
    result=0;
})