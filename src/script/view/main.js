import '../component/search-bar.js';
import '../component/meal-list.js';
import '../component/search-item-category.js';
import DataSource from '../data/data-source.js';
import DataCategory from '../data/data-category.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const mealListElement = document.querySelector('meal-list');
  const searchCategory = document.querySelector('search-category');

  const onButtonSearchClicked = () => {
    DataSource.searchMeal(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
  };

  const onButtonSearchClickedCategory = () => {
    DataCategory.searchMealCategory(searchCategory.value)
        .then(renderResultCategory)
        .catch(fallbackResultCategory);
  };

  const renderResult = results => {
    mealListElement.meals = results;
  };

  const fallbackResult = message => {
    mealListElement.renderError(message);
  };

  const renderResultCategory = results => {
    mealListElement.meals = results;
  };

  const fallbackResultCategory = message => {
    mealListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
  searchCategory.clickEvent = onButtonSearchClickedCategory;
};
export default main;