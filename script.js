const gridsize = 600;
let rows = 16;
let col = 16;

const sketcharea = document.getElementById("sketch-area");
sketcharea.style.width = `${gridsize}px`;
sketcharea.style.height = `${gridsize}px`;

function createGrid() {
  for (let i = 0; i < (col * rows); i++) {
    const gridcell = document.createElement("div");
    gridcell.style.width = `${gridsize / col}px`;
    gridcell.style.height = `${gridsize / rows}px`;
    gridcell.classList.add("cell");

    sketcharea.appendChild(gridcell);
  }
}

createGrid();
