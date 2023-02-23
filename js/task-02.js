const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const makeIngridient = ingredients.map((ingirdient) => {
  const ingridientEl = document.createElement("li");
  ingridientEl.textContent = ingirdient;
  ingridientEl.classList.add("item");

  return ingridientEl;
});

console.log(makeIngridient);

ingredientsList.append(...makeIngridient);

console.log(ingredientsList);
