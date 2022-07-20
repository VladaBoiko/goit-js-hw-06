const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const parentList = document.querySelector("#ingredients");

const createItemList = ingredients.map((ingr) => {
  const createItemEl = document.createElement("li");
  createItemEl.classList.add("item");
  createItemEl.textContent = ingr;
  return createItemEl;
});

parentList.append(...createItemList);
console.log(createItemList);
