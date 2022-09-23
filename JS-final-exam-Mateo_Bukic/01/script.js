let round=document.querySelector(".round-number");
let playerScore=document.querySelector(".player-one-score");
let computerScore=document.querySelector(".player-two-score");
let roleBtn=document.querySelector("button");
let playerDiceOne=document.querySelector(".dice-one");
let playerDiceTwo=document.querySelector(".dice-two");
let computerDiceOne=document.querySelectorAll(".dice-one")[1];
let computerDiceTwo=document.querySelectorAll(".dice-two")[1];
let counter=0;
let playerGameScore=0;
let computerGameScore=0;

class DiceGame{
    constructor(player,score){
        this.player=player,
        this.score=score
    }

    printResult(){
        return `Player:${this.player} is winner, with score:${this.score}`
    }
}

let player=new DiceGame("Mateo",0)
let computer=new DiceGame("Computer",0)

roleBtn.addEventListener("click",()=>{
    roleDice()
    counter++
    round.innerHTML=counter
})


const roleDice=()=>{
    let p1DiceOne=Math.floor(Math.random()*6)+1
    let p1DiceTwo=Math.floor(Math.random()*6)+1
    let p2DiceOne=Math.floor(Math.random()*6)+1
    let p2DiceTwo=Math.floor(Math.random()*6)+1

    playerDiceOne.innerHTML=p1DiceOne
    playerDiceTwo.innerHTML=p1DiceTwo
    computerDiceOne.innerHTML=p2DiceOne
    computerDiceTwo.innerHTML=p2DiceTwo

    gameRules(p1DiceOne,p1DiceTwo,p2DiceOne,p2DiceTwo)
}

const gameRules=(p1DiceOne,p1DiceTwo,p2DiceOne,p2DiceTwo)=>{

    let playerPoints=(p1DiceOne+p1DiceTwo);
    let computerPoints=(p2DiceOne+p2DiceTwo);

    if(p2DiceOne===p2DiceTwo){
        if(computerPoints!==2 && computerPoints<12){
            computerGameScore++
        }
        else if(computerPoints===12){
            if(playerPoints!==12){
                computerGameScore+=2
            }
        }
        else{
            if(computerGameScore>0){
                computerGameScore-=1
            }
        }
    }

     if(p1DiceOne===p1DiceTwo){
        if(playerPoints!==2 && playerPoints<12){
            playerGameScore++
        }
        else if(playerPoints===12){
            if(computerPoints!==12){
                playerGameScore+=2
            }
        }
        else{
            if(playerGameScore>0){
                playerGameScore-=1
            }
        }
    }

    if(playerPoints>computerPoints){
        playerGameScore+=1
    }
    else if(playerPoints<computerPoints){
        computerGameScore+=1
    }

    else if(playerPoints===computerPoints){
        if(playerGameScore>0){
            playerGameScore-=1
        }
        if(computerGameScore>0){
            computerGameScore-=1
        }
    }

    playerScore.innerHTML=playerGameScore
    computerScore.innerHTML=computerGameScore
    player.score=playerGameScore
    computer.score=computerGameScore
    checkForWinner(playerGameScore,computerGameScore)
}

const checkForWinner=()=>{
    if(playerGameScore>=12){
        if(playerGameScore===computerGameScore){
            roleDice()
            if(playerGameScore>computerGameScore){
                alert(player.printResult())
                restartValues()
            }
            if(playerGameScore<computerGameScore){
                alert(computer.printResult())
                 restartValues()
            }
        }
        else{
            alert(player.printResult())
             restartValues()
        }
        
    }

    if(computerGameScore>=12){
       if(playerGameScore===computerGameScore){
            roleDice()
            if(playerGameScore>computerGameScore){
                alert(player.printResult())
                 restartValues()
            }
            if(playerGameScore<computerGameScore){
                alert(computer.printResult())
                 restartValues()
            }
        }
        else{
            alert(computer.printResult())
             restartValues()
        }
    }

}

const restartValues=()=>{
   location.reload()
}