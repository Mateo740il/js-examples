let userInput=document.querySelector(".userInput");
let startBtn=document.querySelector(".startBtn");
let game=document.querySelector(".game");
let štoflecNumber;
let playerInput=document.querySelector(".playerInput");
let nextBtn=document.querySelector(".nextBtn");
let šBtn=document.querySelector(".šBtn");
let currentNumber=document.querySelector(".current")

const gameRules=(gameNumber)=>{
    nextBtn.addEventListener("click",()=>{
        // console.log(playerInput.value.toString().includes(gameNumber.toString()));
        if(playerInput.value===""){
            alert("yu need to input number")
        }
        else{
            if(playerInput.value>0 && playerInput.value % gameNumber===0 || playerInput.value.toString().includes(gameNumber.toString())){
                alert("you lost")
                playerInput.value=""
                gameNumber="";
                location.reload();
            }
            else{
                console.log(playerInput.value)
                currentNumber.innerHTML=playerInput.value
                playerInput.value=""
               
            }
        }
        })

        šBtn.addEventListener("click",()=>{
            if(playerInput.value===""){
                alert("yu need to input number")
            }
            else{
                if(playerInput.value % gameNumber !==0 && playerInput.value.toString().includes(gameNumber.toString())==false){
                alert("you lost")
                playerInput.value=""
                gameNumber="";
                location.reload();
                }
                else{
                    console.log(playerInput.value)
                     currentNumber.innerHTML=playerInput.value
                    playerInput.value=""
                }
            }
            
        })
}

startBtn.addEventListener("click",()=>{
    if(userInput.value>0){
        game.classList.toggle("visible")
        štoflecNumber=userInput.value
        userInput.value=""
    }
    gameRules(štoflecNumber)
})


