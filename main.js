/* 
    * Initial Program
    TODO: Create a 16x16 Grid Using JavaScript
    TODO: Apply CSS Hover effect in each cell to emulate a drawing effect

    * Improved Program
    TODO: Prompt the user for the grid size

    * Optional 
    TODO: Color Palette

    * Information 
    TODO: Document Code
*/

// Create Grid with Specified Size
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
}

// Changes the Color
function changeBrushColor(event) {
    const { color } = event.target.dataset;

    brushColor = color;
}

// Asks the User for their desired Grid Size
var gridSize = prompt("Choose a Canvas Size. Max of 100");

if (gridSize > 100) {
    alert("Maximum of 100");

    location.reload();
}

initializeGrid(gridSize);

const gridContainer = document.querySelector(".grid-container");
const gridCell = document.querySelectorAll(".grid-cell");
const colorButton = document.querySelector("#color-palette");

var drawState = false;
var brushColor = "green";

colorButton.addEventListener("click", changeBrushColor);

// Detection for drawing (Holding Down)
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
