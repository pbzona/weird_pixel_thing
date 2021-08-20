let palettes = [
  ["386fa4","59a5d8","84d2f6","133c55"],
  ["f9dbbd","ffa5ab","da627d","a53860"],
  ["725ac1","8d86c9","cac4ce","242038"],
  ["488b49","4aad52","c5e063","507255"],
  ["cff27e","f2dd6e","e5b25d","b87d4b"]
];

let cellSize = 50;
let numberOfCellsX = 8;
let numberOfCellsY = 8;

let center;
let gridSize;
let colors;

function setup() {
  // Adjust grid for odd numbers of cells
  if (numberOfCellsX % 2 !== 0) {
    numberOfCellsX += 1;
  }
  
  if (numberOfCellsY % 2 !== 0) {
    numberOfCellsY += 1;
  }
  
  // Pick a color palette to use
  colors = palettes[Math.floor(random(0, palettes.length))];
  
  // Configure the grid based on # cells and size
  gridSize = createVector(numberOfCellsX * cellSize, numberOfCellsY * cellSize);
  
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#' + colors[colors.length - 1]);
  
  // Calculate the center based on grid size
  center = p5.Vector.sub(createVector(width / 2, height / 2), createVector(gridSize.x / 2, gridSize.y / 2));
  translate(center);
  noStroke();
    
  // Draw the grid starting at the top
  for (let y = 0; y < gridSize.y; y += cellSize) {
    
    let midPoint = gridSize.x / 2;
    let leftSide = [];
    
    for (let x = 0; x < gridSize.x; x += cellSize) {
      let fillColor;
      
      if (x > midPoint) {
        print(leftSide);
      }
      
      if (x < midPoint) {
        fillColor = colors[Math.floor(random(0, colors.length))];
        leftSide.push(fillColor);
      } else {
        fillColor = leftSide.pop();
      }
      
      fill('#' + fillColor);
      rect(x, y, cellSize, cellSize);     
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}
