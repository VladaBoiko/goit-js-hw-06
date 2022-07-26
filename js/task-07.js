const inputControl = document.querySelector("#font-size-control");
const outputResult = document.querySelector("#text");

inputControl.addEventListener("input", () => {
  outputResult.style.fontSize = `${inputControl.value}px`;
});
