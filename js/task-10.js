function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsContainer = document.querySelector("#controls");
const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const quantBoxes = inputEl.value;
  createBoxes(quantBoxes);
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let divSize = 30;

  for (let i = 0; i < amount; i += 1) {
    divSize += 10;

    const divElem = document.createElement("div");
    console.log(divElem);

    divElem.style.height = `${divSize}px`;
    divElem.style.width = `${divSize}px`;
    divElem.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(divElem);
  }
}

function destroyBoxes() {
  inputEl.value = "";
  boxesContainer.innerHTML = "";
}
