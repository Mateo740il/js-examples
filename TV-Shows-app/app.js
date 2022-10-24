const api_Url="http://api.tvmaze.com/search/shows";
const tvShowContainer=document.querySelector(".main__tvShows__grid");
const menuIcon=document.querySelector(".showNav");
const mobileNavigaion=document.querySelector(".main__mobile__nav");
const tvShowList=["Breaking Bad","Chernobyl","The Wire","The Sopranos","The Office","True Detective","Better Call Saul","Peaky Blinders","Stranger Things"];
const userInput=document.querySelector(".main__search__input");
const searchBtn=document.querySelector("#searchBtn");

menuIcon.addEventListener("click",()=>{
    console.log("hello");
    mobileNavigaion.classList.toggle("show")
})

searchBtn.addEventListener("click",()=>{
    if(userInput.value!==""){
       fetchShowData(userInput.value);
       window.scrollTo(0, document.body.scrollHeight); 
    }
    
})

const fetchShowData=async(tvShow)=>{
    const url=new URL(api_Url)
    url.searchParams.set("q", tvShow)
    let res=await fetch(url)
    let data=await res.json()
    let showData=data[0].show
    showDataInDOM(showData)
}

const showDataInDOM=(tvShow)=>{
    let tvShowTemplate=`
                        <div class="main__tvShows__grid__card">
                            <img class="readMore" src="${tvShow.image.original}"/>
                            <h2>${tvShow.name}</h2>
                            <h3>${tvShow.rating.average}</h3>
                            <span class="material-symbols-outlined">star star star star star</span>
                        </div>
                        `
    tvShowContainer.insertAdjacentHTML("beforeend",tvShowTemplate)
}

tvShowList.forEach(item=>{
    fetchShowData(item)
})



