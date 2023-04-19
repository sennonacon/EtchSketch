const container = document.querySelector(".container");
const gridSize = 16;

createGrid(gridSize);

function createGrid(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const box = document.createElement('div');
    box.classList.add('box');

    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = getRandomColor();
    });

    container.appendChild(box);
  }
}

function resetGrid() {
    let newGridSize = prompt("Enter the number of squares per side (max 100):");
    if (newGridSize !== null && newGridSize > 0 && newGridSize <= 100) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(newGridSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

const resetButton = document.querySelector("#reset-grid");
resetButton.addEventListener("click", resetGrid);

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("cell")) {
        e.target.style.backgroundColor = "black";
    }
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}