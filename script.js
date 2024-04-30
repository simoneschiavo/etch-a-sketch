const container = document.querySelector(".container");
let grid;
let square = document.createElement("div");

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
            square = document.createElement("div");
            square.classList.toggle("square");
            square.style.height = `${960 / squares}px`;
            row.appendChild(square);
        };
    };
};

// Initialize the page with a 16x16 grid
createGrid(16);

// Change background color on hover
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
    square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "white";
    });
});
