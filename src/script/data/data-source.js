//import meals from './meals.js';
//import '../component/meal-details';

class DataSource {
  static searchMeal(keyword) {
    //fungsi fetch() akan mengembalikan promise resolve jika request berhasil dilakukan.
    return fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(response => {
        return response.json();
      })

      .then(data =>{
        if(data.meals) {
          return Promise.resolve(data.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}


// class DataDetails(e) {
//   static detailsMeal(idMeal) {
//     //fungsi fetch() akan mengembalikan promise resolve jika request berhasil dilakukan.
//     return fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
//       .then(response => {
//         return response.json();
//       })

//       .then(data => MealDetails(data.meals));
//   }
// }

// get recipe of the meal
// function DataDetails(e){
//   e.preventDefault();
//   if(e.target.classList.contains('recipe-btn')){
//       let mealItem = e.target.parentElement.parentElement;
//       fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
//       .then(response => response.json())
//       .then(data => MealDetails(data.meals));
//   }
// }

//export default { DataSource, DataSource2 };
export default DataSource;