let menuIcon=document.querySelector(".fa-bars");
let mobileNav=document.querySelector(".mobile__navigation");

menuIcon.addEventListener("click",()=>{
    mobileNav.classList.toggle("showNavigation")
})