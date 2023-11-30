(() => {
  const categoriesContainer = document.getElementById('categories'),
    categoriesList = categoriesContainer.querySelectorAll('.item'),
    categoriesAmount = categoriesList.length;

  console.log('Number of categories: ', categoriesAmount);

  categoriesList.forEach(item => {
    const titleContent = item.querySelector('h2').textContent,
      itemsAmount = item.querySelector('ul').children.length;

    console.log('Category: ', titleContent);
    console.log('Elements: ', itemsAmount);
  });
})();
