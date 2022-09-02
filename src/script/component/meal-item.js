class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('.recipe-btn').value;
  }
   
  render() {
    this.innerHTML = `    
    <div class = "meal-img">
      <img src="${this._meal.strMealThumb}" alt="Food">
    <div>
    <div class = "meal-name">
      <h3>${this._meal.strMeal}</h3>
      <p class="recipe-category">${this._meal.strCategory}</p>
      <h4>${this._meal.strArea}</h4>
      <a href="${this._meal.strSource}">Get Recipe</a>
      <a href="${this._meal.strYoutube}" class="recipe-btn">Video Recipe</a>
    </div>
    `;

    this.querySelector('.recipe-btn').addEventListener('click', this._clickEvent);
  }
}
customElements.define('meal-item', MealItem);
//<h4>Ingredients: </h4>
// <ul>
//           <li>${this._meal.strIngredient1}</li>
//           <li>${this._meal.strIngredient2}</li>
//           <li>${this._meal.strIngredient3}</li>
//           <li>${this._meal.strIngredient4}</li>
//           <li>${this._meal.strIngredient5}</li>
//           <li>${this._meal.strIngredient6}</li>
//       </ul>