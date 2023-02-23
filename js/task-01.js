const categoriesList = document.querySelector("#categories");
console.log("Number of categories:", categoriesList.children.length);

const categoriesItems = document.querySelectorAll(".item");
console.log(categoriesItems);

for (let i = 0; i < categoriesItems.length; i += 1) {
  console.log("Category:", categoriesItems[i].firstElementChild.textContent);
  console.log("Elements:", categoriesItems[i].lastElementChild.children.length);
}
