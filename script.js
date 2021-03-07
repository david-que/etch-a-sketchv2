let mainContainer = document.querySelector(".container");
const clearButton = document.querySelector("#clear-btn");
const etchPad = document.querySelector(".etchpad");

function makeGrid(size) {
  let gridArea = size * size;
  for (let i = 0; i < gridArea; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", fillColor);
    etchPad.appendChild(cell);
    console.log(Array.isArray(cell));
    etchPad.style.display = "grid";
    etchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }
}

function resize(size) {
  clear();
  size = prompt("How many squares per side?");
  makeGrid(size);
}

function clear() {
  const gridArray = Array.from(etchPad.childNodes);
  gridArray.forEach((cell) => {
    etchPad.removeChild(cell);
  });
}

// Color cell Function
function fillColor(e) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener("DOMContentLoaded", function () {
  makeGrid(16);
});

clearButton.addEventListener("click", resize);
