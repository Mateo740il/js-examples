let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissors=document.querySelector(".scissors");
let computerResult=document.querySelector("#result")
let choices=["Rock","Paper","Scissors"];
let userPoints=0;
let computerPoints=0;
let finalResult=document.querySelector(".endGame");

const computerChoice=()=>{
    computerResult.innerHTML=choices[Math.floor(Math.random() * choices.length)]
}

const resetResults=()=>{
    userPoints=0;
    computerPoints=0;
}

const checkResults=()=>{
    if(userPoints==5){
        // alert("User win the game")
        finalResult.innerHTML="User win the game 🏆"
        resetResults();
    }

    if(computerPoints==5){
        // alert("Computer win the game")
        finalResult.innerHTML="Computer win the game 🏆"
        resetResults();
    }
}

rock.addEventListener("click",(e)=>{
    // console.log(e.target.title);
    computerChoice()
    // console.log(computerResult.innerHTML)
    if(computerResult.innerHTML==="Rock"){
        console.log("Even")
    }
    else if(computerResult.innerHTML==="Paper"){
        console.log("Computer win")
        computerPoints++;
    }
    else if(computerResult.innerHTML==="Scissors"){
        console.log("User win")
        userPoints++;
    }

    checkResults();
})

paper.addEventListener("click",(e)=>{
    // console.log(e.target.title);
    computerChoice()
    if(computerResult.innerHTML==="Paper"){
        console.log("Even")
    }
    else if(computerResult.innerHTML==="Scissors"){
        console.log("Computer win")
        computerPoints++;
    }
    else if(computerResult.innerHTML==="Rock"){
        console.log("User win")
        userPoints++;
    }

    checkResults();
})

scissors.addEventListener("click",(e)=>{
    // console.log(e.target.title);
    computerChoice()
    if(computerResult.innerHTML==="Scissors"){
        console.log("Even")
    }
    else if(computerResult.innerHTML==="Rock"){
        console.log("Computer win")
        computerPoints++;
    }
    else if(computerResult.innerHTML==="Paper"){
        console.log("User win")
        userPoints++;
    }

    checkResults();
})

