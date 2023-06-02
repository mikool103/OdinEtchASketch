const mainButton = document.querySelector('.header-button');
mainButton.addEventListener('click', changeAmountOfSquare);




printGrid(16,60);

//Gets the amount of squares to create
function getAmountOfSquares(widthOfGrid) {
    return widthOfGrid * widthOfGrid;
}

//Calculate the width of the squares depending on the width of the grid
function calculateWidthOfSquares(widthOfGrid) {
    widhtOfSquares = 960/widthOfGrid;
   return widhtOfSquares.toFixed(2);
}

//Remove the squares from the grid
function clearGrid() {
    gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square) => square.remove());
}

//Print squares to the grid
function printGrid(widthOfGrid, widhtOfSquares) {
    squaresToPrint = getAmountOfSquares(widthOfGrid);
    squareContainer = document.querySelector('.grid-second-container')
    for(let i = 0; i < squaresToPrint; i++){
       let square = document.createElement('div');
       square.className = 'grid-square';
       square.style.width = widhtOfSquares + "px";
       square.style.height = widhtOfSquares + "px";
       square.addEventListener('mouseover', function(){
        square.style.background = 'black'; //paint squares black when hovering over
       });
       squareContainer.appendChild(square); 
    }
    
}

//Changes the width in squares of the grid
function changeAmountOfSquare(){
    widthOfGrid = parseInt(prompt('Enter a width between 1 and 100 pixels'));
    if (Number.isInteger(widthOfGrid) && widthOfGrid <= 100) {
        clearGrid();
        widhtOfSquares = calculateWidthOfSquares(widthOfGrid);
        printGrid(widthOfGrid,widhtOfSquares);  
    } else if (widthOfGrid > 100) {
        alert('The width must be less than 100 pixels');
    } else {
        alert('Invalid Symbol')
    }

}














