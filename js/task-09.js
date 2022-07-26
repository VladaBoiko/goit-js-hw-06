const body = document.querySelector("body");
const button = body.querySelector(".change-color");
const targetColor = body.querySelector(".color");

button.addEventListener("click", changeColor);

function changeColor() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const color = getRandomHexColor();
  targetColor.textContent = color;
  body.style.backgroundColor = color;
}
