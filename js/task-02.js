const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = ingredients.map(ingredient => {

  const newIngredients = document.createElement("li");
  newIngredients.textContent = ingredient;
  newIngredients.classList.add(".item");

  return newIngredients
    });


const ingredientsContainer = document.querySelector("#ingredients");

ingredientsContainer.append(...elements);

console.log(ingredientsContainer);


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
