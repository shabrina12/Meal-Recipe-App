class MealDetails extends HTMLElement {
    set meal(meal) {
      this._meal = meal[0];
      this.render();
    }
     
    render() {
      this.innerHTML = `    
        <h2 class="recipe-title">${this._meal.strMeal}</h2>
        <p class="recipe-category">${this._meal.strCategory}</p>
        <div class="recipe-instruct">
            <h3>Instructions:</h3>
            <p>${this._meal.strInstructions}</p>
        </div>
        <div class="recipe-meal-img">
            <img src="${this._meal.strMealThumb}">
        </div>
        <div class="recipe-link">
            <a href="${this._meal.strYoutube}" target="_blank">Watch Video</a>
        </div>
      `;
      mealDetailsContent.innerHTML = this.innerHTML;
      mealDetailsContent.parentElement.classList.add('showRecipe');
    }
  }
  customElements.define('meal-details', MealItem);

//   // create a modal
// function mealRecipeModal(meal){
//     console.log(meal);
//     meal = meal[0];
//     let html = `
//         <h2 class = "recipe-title">${meal.strMeal}</h2>
//         <p class = "recipe-category">${meal.strCategory}</p>
//         <div class = "recipe-instruct">
//             <h3>Instructions:</h3>
//             <p>${meal.strInstructions}</p>
//         </div>
//         <div class="recipe-meal-img">
//             <img src="${meal.strMealThumb}">
//         </div>
//         <div class="recipe-link">
//             <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
//         </div>
//     `;
//     mealDetailsContent.innerHTML = html;
//     mealDetailsContent.parentElement.classList.add('showRecipe');
//   }