const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const parentList = document.querySelector("#ingredients");
let createItemEl;
const productList = (ingredients) => {
  for (let i = 0; i <= ingredients.length - 1; i += 1) {
    createItemEl = document.createElement("li");
    createItemEl.classList.add(".item");
    createItemEl.textContent = ingredients[i];
    console.log(createItemEl);
    parentList.append(createItemEl);
  }
};

console.log(productList(ingredients));
