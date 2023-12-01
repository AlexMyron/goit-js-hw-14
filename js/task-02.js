const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

(() => {
  const rootElement = document.getElementById('ingredients');
  const fragment = [];
  ingredients.forEach(ingredientName => {
    const ingredient = document.createElement('li');
    ingredient.textContent = ingredientName;
    ingredient.classList.add('item');
    fragment.push(ingredient);
  });
  console.log(fragment);
  rootElement.append(...fragment);
})();
