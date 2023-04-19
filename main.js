const loadMeals = (mealname)=> {
     const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealname}`
    fetch(url).then(res=>res.json()).then(data=> displaymeals(data.meals))
}


const displaymeals=meals=> {

    // console.log(meals);
    const mealscontainer= document.getElementById('mealscontainer')
    mealscontainer.innerHTML="";
    meals.forEach(meal => {
        console.log(meal);
        const mealdiv= document.createElement('div')
        mealdiv.classList.add('col');
        mealdiv.innerHTML=` 
        <div class="card">
        <img src="${meal.strMealThumb
        }" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="detail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Details
          </button>

        </div>
      </div>  `
        
      mealscontainer.appendChild(mealdiv)
    });
}


const searchmeal=()=>{

    // console.log('button click')
    const searchtext=document.getElementById('searchfield').value
    // console.log(searchtext);
    loadMeals(searchtext)

}


const detail=mealid=>{

    // console.log(mealid)
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    fetch(url).then(res=>res.json()).then(data=>dispalymeal(data.meals[0]))

}

const dispalymeal=meal=>{

    document.getElementById('exampleModalLabel').innerText=meal.strMeal;
    const modalbody= document.getElementById('meal-body')
    modalbody.innerHTML=`
    <img class="img-fluid" src="${meal.strMealThumb
    }"> <p>${meal.strInstructions}</p>
    `

}


loadMeals('Cake');