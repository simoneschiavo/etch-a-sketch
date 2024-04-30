const container = document.querySelector(".container");
let grid;

// Create a grid
function createGrid(squares) {
    grid = document.createElement("div");
    grid.classList.toggle("grid");
    container.appendChild(grid);

    for (let i = 1; i <= squares; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row");
        row.style.height = `${960 / squares}px`;
        grid.appendChild(row);

        for (let j = 1; j <= squares; j++) {
            const square = document.createElement("div");
            square.classList.toggle("square");
            square.style.height = `${960 / squares}px`;
            square.addEventListener("mouseover", () => {
              square.style.backgroundColor = "black";
            });
            square.addEventListener("mouseout", () => {
              square.style.backgroundColor = "white";
            });
            row.appendChild(square);
        };
    };
};

// Initialize the page with a 16x16 grid
createGrid(16);

// Create new grid based on the user input
const gridButton = document.querySelector(".gridButton");

gridButton.addEventListener("click", () => {
    const numOfSquares = prompt("How many squares per row do you want?", "");
    grid.remove();
    createGrid(numOfSquares);
});