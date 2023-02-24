const input = document.querySelector("#font-size-control");
const textCnange = document.querySelector("#text");

textCnange.style.fontSize = `${input.value}px`;

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  textCnange.style.fontSize = `${event.currentTarget.value}px`;
}
