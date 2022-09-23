// Overlay task
let overlay=document.querySelector(".overlay")
const hideLoader=()=>{
    let randomTime=(Math.floor(Math.random()*4)+1)*1000
    setInterval(()=>{
        overlay.classList.add("hide")
    },randomTime)
    localStorage.setItem("saveOverlay","hide")
}

if(localStorage.getItem("saveOverlay")===null){
    hideLoader()
}
else{
    overlay.style.display = "none"
}



//  ----------------------------------------------------------------

// Header scroll event task
let header=document.querySelector(".header")
document.addEventListener("scroll",()=>{
    let scrolls=window.scrollY
    if(scrolls>100){
        header.classList.add("hide")
    }
    else{
        header.classList.remove("hide")
    }

    // console.log(scrolls);
})

//  ----------------------------------------------------------------


// Menu icons task
let menuIcon=document.querySelector(".menu__icon");
let userIcon=document.querySelector(".userIcon");
let drawer=document.querySelector(".drawer");

// userIcon.addEventListener("click",()=>{
//     drawer.classList.add("right")
//     drawer.classList.remove("show")
// })

// menuIcon.addEventListener("click",()=>{
//     drawer.classList.add("show")
//     drawer.classList.remove("right")
// })

document.addEventListener("click",(event)=>{
if(event.target.classList.value==="icon-button menu__icon"){
    drawer.classList.add("show")
  }
  else if(event.target.classList.value==="icon-button userIcon"){
    drawer.classList.add("right")
  }
  else if((event.target.classList.value==="drawer drawer--hamburger show") || (event.target.classList.value==="drawer drawer--hamburger right")){
    // console.log("helo");
  }
  else{
    //   console.log(event.target.classList.value);
      drawer.classList.remove("show")
      drawer.classList.remove("right")
  }
})

// ----------------------------------------------------------------

// Fetch random users task

let usersTable=document.querySelector(".usersTable");
let users=[];
let sortByName=document.querySelector(".sortByName");
let sortByCountry=document.querySelector(".sortByCountry");
let sortByPostcode=document.querySelector(".sortByPostcode");
let searchInput=document.querySelector(".search__field");


const getUsers=async()=>{
    let res=await fetch("https://randomuser.me/api/?results=10")
    let data=await res.json();
    users=data.results;
    console.log(users);
    users.sort((a, b) => {
        return a.dob.age - b.dob.age;
    });
    showUsersInDOM(users);
}

const showUsersInDOM=(users)=>{
    users.forEach(user => {
        userTemplate=`<tr>
                            <td>${user.name.first} ${user.name.last}</td>
                            <td>${user.location.country}</td>
                            <td>${user.location.postcode}</td>
                            <td>${user.dob.age}</td>
                        </tr>`
        usersTable.insertAdjacentHTML("beforeend",userTemplate)
    });
    
}

sortByPostcode.addEventListener("click",()=>{
    users.sort((a, b) => {
        return a.location.postcode - b.location.postcode;
    });
    usersTable.innerHTML=""
    showUsersInDOM(users)
})


sortByCountry.addEventListener("click",()=>{
    function compare( a, b ) {
        if ( a.location.country < b.location.country){
            return -1;
        }
        if ( a.location.country > b.location.country ){
            return 1;
        }
        return 0;
        }
    users.sort( compare );
    usersTable.innerHTML=""
    showUsersInDOM(users)
})


sortByName.addEventListener("click",()=>{
    function compare( a, b ) {
        if ( a.name.last < b.name.last){
            return -1;
        }
        if ( a.name.last > b.name.last ){
            return 1;
        }
        return 0;
        }
    users.sort( compare );
    usersTable.innerHTML=""
    showUsersInDOM(users)
})

const filterUsers=(searchInputEvent)=>{
    let keyword=searchInputEvent.target.value
    let usersFilter=users.filter(user=>{
        let usersInfo=`${user.name.first.toLowerCase()}|${user.name.last.toLowerCase()}|${user.location.country.toLowerCase()}|${user.location.postcode}`
        return usersInfo.includes(keyword.toLowerCase())
    })
    usersTable.innerHTML=""
    showUsersInDOM(usersFilter)
}

searchInput.addEventListener("keyup",(event)=>{
    filterUsers(event)
})

getUsers()
// -----------------------------------------------------

// fetch random word task

let genrateWordBtn=document.querySelector("#generateWord");
let randomword=document.querySelector(".randomWord");
let phonetic=document.querySelector(".phonetic");
let partOfSpeech=document.querySelector(".partOfSpeech");
let definition=document.querySelector(".definition");
let audioSrc=document.querySelector(".audioSrc");
let audioMsg=document.querySelector(".audioMsg");

const fetchRandomWord=async()=>{
    let res=await fetch(`https://api.api-ninjas.com/v1/randomword`) 
    let data=await res.json()
    let word=data.word
    randomword.innerHTML=word
    fetchExplanation(word)
}

const fetchExplanation=async(word)=>{
    let res=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    let data=await res.json()
    console.log(data[0]);
    let wordExplanation=data[0]
    if(wordExplanation.phonetic===undefined){
        phonetic.innerHTML="There is no phonetic for this word"
    }
    else{
        phonetic.innerHTML=wordExplanation.phonetic
    }

    if(wordExplanation.phonetics[0].audio===""){
        audioMsg.innerHTML="There is none audio for this word"
    }
    else{
        audioMsg.innerHTML=""
        audioSrc.src=wordExplanation.phonetics[0].audio
    }
    partOfSpeech.innerHTML=wordExplanation.meanings[0].partOfSpeech
    if(wordExplanation.meanings[0].definitions[0].definition===""){
        definition.innerHTML="There is no defintion for this word"
    }
    else{
        definition.innerHTML=wordExplanation.meanings[0].definitions[0].definition
    }
    
}


genrateWordBtn.addEventListener("click",()=>{
    fetchRandomWord()
})

// -------------------------------------------------------------

// footer task

const options={
    root: null,
    rootMargin:'0px',
    threshold:0.5
}
 
const callback=(entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("observer")
        }
        else{
            entry.target.classList.remove("observer")
        }
    });
}

let observer= new IntersectionObserver(callback, options);
let targets = document.querySelector(".footer");
observer.observe(targets)


