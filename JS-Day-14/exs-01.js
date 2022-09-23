let flag=document.querySelector("img");
let userInput=document.querySelector(".flagName");
let submitBtn=document.querySelector(".submit");
let playAgain=document.querySelector(".playAgain");
let skipBtn=document.querySelector(".skip");
let result=document.querySelector(".result");
let showWinner=document.querySelector(".winner");
let radioBtns=document.querySelector(".inputs")
let computerResults=0;
let userResults=0;
let skipCounts=0;
// let countryCodes=["010","533","060","535","170","192","496","578","144","548","008","020","032","100","152","188","191","300","332"]
let countys = [
  {
    "name": "Antarctica",
    "code": "010",
  },
  {
    "name": "Aruba",
    "code": "533",
  },
  {
    "name": "Bermuda",
    "code": "060",
  },
  {
    "name": "Czechia",
    "code": "203",
  },
  {
    "name": "Dominica",
    "code": "212",
  },
  {
    "name": "Croatia",
    "code": "191",
  },
  {
    "name": "Estonia",
    "code": "233",
  },
  {
    "name": "Fiji",
    "code": "242",
  },
  {
    "name": "Gibraltar",
    "code": "292",
  },
  {
    "name": "Honduras",
    "code": "340",
  },
  {
    "name": "Mexico",
    "code": "484",
  },
  {
    "name": "San Marino",
    "code": "674"
  },
   {
    "name": "Zambia",
    "code": "894"
  },
   {
    "name": "Turkey",
    "code": "792"
  },
   {
    "name": "Switzerland",
    "code": "756"
  }

]

class Score{
    constructor(player,scoreResult){
        this.player=player;
        this.scoreResult=scoreResult
    }

    printScore(){
        return `${this.player}: ${this.scoreResult}`
    }

    resetScore(){
        this.scoreResult=0
       return `${this.player}: ${this.scoreResult}`
    }
}

const getRandomCountry=()=>{
    let choice=countys[Math.floor(Math.random()*countys.length)]
    return choice.name
}

const checkResult=(userInput,correctCountry)=>{
    userInput= userInput.charAt(0).toUpperCase() + userInput.slice(1);
    if(userInput===correctCountry){
        result.innerHTML="Correct answer"
        userResults+=1
    }
    else{
        result.innerHTML="Wrong answer"
        computerResults++
    }
    let user=new Score("Mateo",userResults)
    let computer=new Score("Computer",computerResults)
    console.log(user.printScore());
    console.log(computer.printScore());
    checkWinner(user,computer)
}

const checkWinner=(user,computer)=>{
    if(user.scoreResult===5){
        showWinner.innerHTML=`Congratulation ${user.player} you won`
        diableButtons(submitBtn)
        diableButtons(skipBtn)
    }
    else if(computer.scoreResult==5){
        showWinner.innerHTML=`Better luck next time`
        diableButtons(skipBtn)
        diableButtons(submitBtn)
    }
}

const getFlags=async()=>{
    let randomFlag= countys[Math.floor(Math.random()*countys.length)]
    console.log(randomFlag.name);
    let res= await fetch(`https://countryflagsapi.com/svg/${randomFlag.code}`)
    flag.src=res.url
    radioBtns.innerHTML=""
    let answerTamplate=`<input class="radio" type="radio" name="answer flag" value="${randomFlag.name}">
                        <label for="html">${randomFlag.name}</label><br>
                        <input class="radio" type="radio" name="answer flag" value="${getRandomCountry()}">
                        <label for="html">${getRandomCountry()}</label><br>
                        <input class="radio" type="radio" name="answer flag" value="${getRandomCountry()}">
                        <label for="html">${getRandomCountry()}</label><br>
                        <input class="radio" type="radio" name="answer flag" value="${getRandomCountry()}">
                        <label for="html">${getRandomCountry()}</label><br>
                      
                        `
    radioBtns.insertAdjacentHTML("beforeend",answerTamplate)
    document.querySelectorAll(".radio").forEach(radio=>{
        radio.addEventListener("click",(event)=>{
            userInput.value=event.target.value
        })
    })
    return randomFlag;
}


const gameRules=async ()=>{
   let randomCountry=await getFlags()
    skipBtn.addEventListener("click",async()=>{
       if(skipCounts==3){
           diableButtons(skipBtn)
       }
       else{
        randomCountry=await getFlags()
        userInput.value=""
        skipCounts++;
       }
    })

    submitBtn.addEventListener("click",async()=>{
        checkResult(userInput.value,randomCountry.name)
        randomCountry=await getFlags()
        userInput.value=""
    })

    playAgain.addEventListener("click",()=>{
        location.reload();
    })
}

const diableButtons=(btn)=>{
    btn.disabled=true
    btn.classList.add("disable")
}

gameRules();