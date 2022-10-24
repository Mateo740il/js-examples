let mealCards=document.querySelector(".mealCards");
let characters="abcdefghijklmnoprstvwy";
let meals=[];
let btns=document.querySelectorAll("button");
let searchMeals=document.querySelector(".search");


const fetchFood=async(category)=>{
    let res= await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    let data=await res.json()
    meals=data.meals
    mealCards.innerHTML=""
    showMealInDOM(meals) 
    console.log(meals);   
}

const showMealInDOM=(mealsArray)=>{
    mealsArray.forEach(meal => {
        let fodTamplate=`<div class="card">
                            <h4>${meal.strMeal}</h4>
                            <img src="${meal.strMealThumb}"/>
                         </div>`
        mealCards.insertAdjacentHTML("beforeend",fodTamplate)
    })
}


btns.forEach(btn=>{
    console.log(btn);
    btn.addEventListener("click",(event)=>{
        let category=event.target.value;
        fetchFood(category)
    })
})

searchMeals.addEventListener("keyup",(event)=>{
    let keyword=event.target.value
    let filterMeals=meals.filter(meal=>{
        let userMeal=meal.strMeal
        return userMeal.includes(keyword.charAt(0).toUpperCase() + keyword.slice(1))
    })
    mealCards.innerHTML=""
    showMealInDOM(filterMeals) 
})

