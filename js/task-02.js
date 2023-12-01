const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

(() => {
  const rootElement = document.getElementById('ingredients');
  const fragment = document.createDocumentFragment();
  ingredients.forEach(ingredientName => {
    const ingredient = document.createElement('li');
    ingredient.textContent = ingredientName;
    ingredient.classList.add('item');
    fragment.appendChild(ingredient);
  });
  rootElement.appendChild(fragment);
})();
