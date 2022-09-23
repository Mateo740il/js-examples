let userChoice=document.querySelectorAll("a")
let gameCgoice=["Paper","Rock","Scissors"];
let computerResult=document.querySelector("#result")
let finalResult=document.querySelector(".endGame")
let userPoints=0;
let computerPoints=0;

const computerChoice=()=>{
    computerResult.innerHTML=gameCgoice[Math.floor(Math.random() * gameCgoice.length)]
}

const resetResults=()=>{
    userPoints=0;
    computerPoints=0;
}

const checkResults=()=>{
    if(userPoints==5){
        finalResult.innerHTML="User win the game 🏆"
        resetResults();
    }

    if(computerPoints==5){
        finalResult.innerHTML="Computer win the game 🏆"
        resetResults();
    }
}

const gameRules=(a,b)=>{
    if(a==="Rock" && b==="Paper" || a==="Paper" && b==="Scissors" || a==="Scissors" && b==="Rock"){
        computerPoints++
        console.log("Computer win: "+computerPoints)
    }
    else if(a!==b){
        userPoints++
        console.log("User win: "+userPoints)
    }

    checkResults()
}

userChoice.forEach(choice=>{
    choice.addEventListener("click",(e)=>{
        computerChoice()
        if(e.target.title===computerResult.innerHTML){
            console.log("Even");
        }
        gameRules(e.target.title,computerResult.innerHTML)
    })
})