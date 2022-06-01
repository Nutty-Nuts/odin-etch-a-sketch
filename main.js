/* 
    * Initial Program
    TODO: Create a 16x16 Grid Using JavaScript
    TODO: Apply CSS Hover effect in each cell to emulate a drawing effect

    * Improved Program
    TODO: Prompt the user for the grid size

    * Optional 
    TODO: Color Palette
*/

function initializeGrid(size) {
    const gridContainer = document.querySelector(".grid-container");

    let gridWidth = size;
    let gridLength = size;

    for (let a = 0; a < gridWidth; a++) {
        const gridRow = document.createElement("div");

        gridRow.classList.add("grid-row");
        for (let b = 0; b < gridLength; b++) {
            const gridCell = document.createElement("div");

            gridCell.classList.add("grid-cell");
            gridRow.appendChild(gridCell);
        }

        gridContainer.appendChild(gridRow);
    }

    console.log("Function Work");
}

function changeBrushColor(event) {
    const { color } = event.target.dataset;

    console.log("Changed Color");

    brushColor = color;
}

var gridSize = prompt("Choose a Canvas Size");

initializeGrid(gridSize);

const gridContainer = document.querySelector(".grid-container");
const gridCell = document.querySelectorAll(".grid-cell");
const colorButton = document.querySelector("#color-palette");

var drawState = false;
var brushColor = "green";

colorButton.addEventListener("click", changeBrushColor);

gridContainer.addEventListener("mousedown", function (event) {
    drawState = true;
});

gridContainer.addEventListener("mouseup", function (event) {
    drawState = false;
});

gridCell.forEach((cell) => {
    cell.addEventListener("mouseenter", function (event) {
        if (drawState == true) {
            cell.style.backgroundColor = brushColor;
        }
    });
});
