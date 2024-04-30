const container = document.querySelector(".container");
let grid;

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
            row.appendChild(square);
        };
    };
};

createGrid(16);