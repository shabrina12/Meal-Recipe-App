class DataCategory {
    static searchMealCategory(category_word) {
      //fungsi fetch() akan mengembalikan promise resolve jika request berhasil dilakukan.
      return fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category_word}`)
        .then(response => {
          return response.json();
        })
  
        .then(data =>{
          if(data.meals) {
            return Promise.resolve(data.meals);
          } else {
            return Promise.reject(`${category_word} is not found`);
          }
        });
    }
}

export default DataCategory;