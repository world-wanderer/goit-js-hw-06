const input = document.querySelector("#font-size-control");
const textCnange = document.querySelector("#text");

console.log(input);

function onInputChange(event) {
  textCnange.style.fontSize = `${event.currentTarget.value}px`;
}

input.addEventListener("input", onInputChange);
