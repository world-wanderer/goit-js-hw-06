const input = document.querySelector("#validation-input");
console.log(input);

input.addEventListener("blur", onInput);

function onInput() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }

  console.log(input.value.length);
  console.log(Number(input.dataset.length));
}
