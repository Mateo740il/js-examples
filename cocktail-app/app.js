let btns=document.querySelectorAll("button");
let drinkOptions=document.querySelector(".drinkOptions");

const getCocktail=async(name)=>{
    let res=await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    let data=await res.json();
    let drinks=data.drinks
    console.log(drinks);
    showDrinksInDOM(drinks)
}

btns.forEach(btn=>{
    btn.addEventListener("click",(event)=>{
        getCocktail(event.target.value);
    })
})

const showDrinksInDOM=(drinks)=>{
    drinkOptions.innerHTML=""
    drinks.forEach(drink => {
        drinkTemplate=`<div class="drinkCard">
                            <h2>${drink.strDrink}</h2>
                            <img src="${drink.strDrinkThumb}"/>
                            <button class="drinkInfo" value="${drink.strInstructions}">Instructions</button>
                          </div>`
        drinkOptions.insertAdjacentHTML("beforeend",drinkTemplate)
    });
    document.querySelectorAll(".drinkInfo").forEach(btn => {
        btn.addEventListener("click",(event)=>{
            console.log(event.target.value);
            alert(event.target.value)
        })
    });
}
