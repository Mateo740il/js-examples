let menuIcon=document.querySelector("#mobileNav");
let mobileNav=document.querySelector(".main__mobileNav");
let beerGrid=document.querySelector(".main__grid");
let mainBeerCard=document.querySelector(".main__beerInfo");
let userName=document.querySelector(".main__form__name");
let form=document.querySelector(".main__form");
let userSurname=document.querySelector(".main__form__surname");
let userAge=document.querySelector(".main__form__age");
let submitBtn=document.querySelector(".main__form__submit");

class User{
    constructor(name,surname,age){
        this.name=name,
        this.surname=surname,
        this.age=age
    }

    checkAge(){
        if(this.age>=18){
            console.log(`Hi ${this.name} welcome to Crafter's`);
            beerGrid.style.visibility="visible"
            form.style.display="none"
        }

        if(this.age<18){
            form.style.display="none"
            beerGrid.style.visibility="visible"
            beerGrid.innerHTML=`<h1>Hi ${this.name}, sorry but you are to young to drink beer !</h1>`
        }
    }
}


submitBtn.addEventListener("click",()=>{
    let userOne=new User(userName.value.toUpperCase(),userSurname.value,userAge.value)
    console.log(userOne);
    userOne.checkAge()
})

menuIcon.addEventListener("click",(e)=>{
    if(menuIcon.innerText==="menu"){
        menuIcon.innerText="close"
       mobileNav.style.display = "block";
    }
    else if(menuIcon.innerText==="close"){
        menuIcon.innerText="menu"
        mobileNav.style.display = "none";
    }
    
})

const fetchBeers=async()=>{
    let res=await fetch("https://api.punkapi.com/v2/beers")
    let data=await res.json()
    console.log(data);
    addDataToHTML(data);
}

const addDataToHTML=(beerArray)=>{
    let btnId=0;
    beerArray.forEach(beer => {
        let beerCardTemplate=`<div class="main__grid__beerCard">
                                <h2>${beer.name}</h2>
                                <button id="${btnId++}" class="beerBtns">Read More</button>
                              </div>`
        beerGrid.insertAdjacentHTML("beforeend",beerCardTemplate)
    });

    let beerBtns=document.querySelectorAll(".beerBtns");
    beerBtns.forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            showBeerInfo(beerArray[e.target.id])
            window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        })
    })
    
}

const showBeerInfo=(beerData)=>{
    mainBeerCard.innerHTML=""
    let beerInfoTemplate=`<div class="main__beerInfo__card">
                            <h2>${beerData.name}  <span class="material-symbols-outlined closeBeerInfo"> close </span> </h2>
                            <img src="${beerData.image_url}"/>
                            <p>${beerData.description}</p>
                          </div>`
    mainBeerCard.insertAdjacentHTML("beforeend",beerInfoTemplate)

    let closeBtn=document.querySelector(".closeBeerInfo")
    closeBtn.addEventListener("click",()=>{
        mainBeerCard.innerHTML=""
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    })
}

fetchBeers()