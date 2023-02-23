function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", onClickButton);

function onClickButton() {
  colorText.textContent = bodyEl.style.backgroundColor = getRandomHexColor();
}
