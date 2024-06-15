const gridsize = 600;
let  squarePerSide = 16 ;
const sketcharea = document.getElementById("sketch-area");
const sliderContainer = document.getElementById("slider-container");
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

sliderValue.textContent =  `${slider.value} x ${slider.value} (Resolution)` ;
sketcharea.style.width = sketcharea.style.height = `${gridsize}px`;



function setbackColor()
{
  this.style.backgroundColor = "green" ;
}
function createGrid() {
  const numOfSquares = (squarePerSide * squarePerSide);
  const widthOrHeight = `${(gridsize / squarePerSide) - 2}px`;
  for (let i = 0; i < numOfSquares; i++) {
    const gridcell = document.createElement("div");
    gridcell.style.width = gridcell.style.height = widthOrHeight ;
    gridcell.classList.add("cell");

    sketcharea.appendChild(gridcell);

    gridcell.addEventListener("mouseover",setbackColor);
  }
}



function removeCells(){
  while(sketcharea.firstChild){
    sketcharea.replaceChild(sketcharea.firstChild);
  }
}

createGrid();