let word=document.querySelector(".word");
let startBtn=document.querySelector(".startBtn")
let hard=document.querySelector(".hard")
let playAgain=document.querySelector(".playAgain")
let time=document.querySelector(".time")
let bestScore=document.querySelector(".highScore")
let userName=document.querySelector("#userName")
let counter=0;
let wordArray=[];
let timeleft=60;
let correctWord=0;

class Player{
    constructor(player,highscore,level="easy"){
        this.player=player,
        this.highscore=highscore,
        this.level=level
    }

    setScore(score){
        this.highscore=score
    }

    printScore(){
        return `User: ${this.player} <br> New Highscore: ${this.highscore} at level: ${this.level}`
    }
}


const getWord=async(level)=>{
    let res=await fetch("https://random-word-api.herokuapp.com/word")
    let data=await res.json()
    if(level==="hard"){
        while(data[0].length<8){
            res=await fetch("https://random-word-api.herokuapp.com/word")
            data=await res.json()
        }

        if(data[0].length>=8){
             wordArray=data[0].split("");
            // console.log(wordArray);
            wordArray.forEach((char,index) => {
                let span=`<span class=${index}>${char}</span>`
                word.insertAdjacentHTML("beforeend",span)
            });
        }
    }
    else if(level==="easy"){
         wordArray=data[0].split("");
        // console.log(wordArray);
        wordArray.forEach((char,index) => {
            let span=`<span class=${index}>${char}</span>`
            word.insertAdjacentHTML("beforeend",span)
        });
    }
   
}

startBtn.addEventListener("click",()=>{
    startBtn.classList.add("hidden")
    userName.classList.add("hidden")
    hard.classList.add("hidden")
    startGame("easy");
})

hard.addEventListener("click",()=>{
    hard.classList.add("hidden")
    startBtn.classList.add("hidden")
    userName.classList.add("hidden")
    startGame("hard")
})


const startGame=(level)=>{
    let finalHighScore=localStorage.getItem("highScoreKey");
    console.log(finalHighScore);
    let newPlayer=new Player(userName.value,"",level)
    getWord(level);
    let timer=setInterval(()=>{
        if(timeleft<=0){
            console.log("Game over");
            playAgain.classList.add("show")
            clearInterval(timer)
            newPlayer.setScore(correctWord)
            if(correctWord>finalHighScore){
                // local storage
                let highScore=correctWord;
                localStorage.setItem("highScoreKey", highScore)
                console.log("Highscore: "+highScore);
                bestScore.innerHTML=newPlayer.printScore()
            }

            else{
                console.log("Highscore: "+finalHighScore);
                console.log(newPlayer.printScore());
            }
        }

        else{
            time.innerHTML=timeleft +" sec";
        }
        timeleft-=1;
    },1000);

    document.addEventListener("keydown",(event)=>{
        let spans=document.querySelectorAll("span")

        if(event.key===wordArray[counter]){
            // console.log("true");
            spans[counter].classList.add("green")
            counter++
        }
        else{
            // console.log("wrong letter");
            timeleft-=3;
        }        

        finishWord(level);
    })
}

   
const finishWord=(level)=>{
    if(counter===wordArray.length){
        word.innerHTML=""
        counter=0
        correctWord+=1;
        getWord(level)
    }
}

playAgain.addEventListener("click",()=>{
    location.reload();
})




