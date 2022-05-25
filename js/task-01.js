


const refs = {
    numberCategoriesEl: document.querySelector("#categories"),
    allCategoriesEl: document.querySelectorAll(".item"),
    }

console.log(`Number of categories:`, refs.numberCategoriesEl.children.length);

refs.allCategoriesEl.forEach(element => {
    const categoryName = element.querySelector("h2");
  console.log(`Category: ${categoryName.textContent}`);
    const numberOfCategoryItems = element.querySelectorAll("li");
  console.log(`Elements ${numberOfCategoryItems.length}`);
});

//     Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5