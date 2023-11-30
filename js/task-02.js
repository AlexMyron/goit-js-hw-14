const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

(() => {
  const rootElement = document.getElementById('ingredients');
  ingredients.forEach(ingredientName => {
    const ingredient = document.createElement('li');
    ingredient.textContent = ingredientName;
    ingredient.classList.add('item');
    rootElement.insertAdjacentElement('beforeEnd', ingredient);
  });
})();
