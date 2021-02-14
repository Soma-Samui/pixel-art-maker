// Capture default values for Color and Size
const defaultColor = document.getElementById('colorPicker');

const inputGrid = document.getElementById('sizePicker');

for (let i = 0; i < inputGrid.length; i++){
  if (inputGrid[i].name === "height"){
    var defaultHeight = inputGrid[i].value;
  } else if (inputGrid[i].name === "width"){
    var defaultWidth = inputGrid[i].value;
  }
}

// Select table
const table = document.getElementById("pixelCanvas");

// Function to remove Grid
function removeGrid(){
  var tableExists = table.firstElementChild;

  if (tableExists){
    table.firstElementChild.remove();
  }
}

// Add Event Listner for responding to Submit button press
inputGrid.addEventListener("submit", function (submit) {
  
  submit.preventDefault();

  // Select color input
  var userColor = document.getElementById('colorPicker');

  //console.log('Submit was clicked!');

  // Select size input
  for (let i = 0; i < inputGrid.length; i++){
    if (inputGrid[i].name === "height"){
      var userHeight = inputGrid[i].value;
    } else if (inputGrid[i].name === "width"){
        var userWidth = inputGrid[i].value;
    }
  }

  // Call makeGrid function to create the Grid
  makeGrid(userHeight, userWidth, userColor);
  });
  

// Function to interact with the Grid
function makeGrid(height, width, color) {

  removeGrid();
  
  for (let i = 0; i < height; i++){
    // Add the rows to the table
    let row = table.insertRow(i);
    
    for (let j = 0; j < width; j++){
      // Add the columns to the table
      let cell = row.insertCell(j);

      // Add Event Listner for responding to mouse single-click on a cell
      cell.addEventListener("click", function() {
        // Set the cell color as per user selected color
        cell.style.backgroundColor = color.value;
      })

      // Add Event Listner for responding to mouse double-click on a cell
      cell.addEventListener("dblclick", function() {
        // Remove color from the cell
        cell.style.backgroundColor = "rgb(255,255,255)";
      })
    }
  }
}

// Add Event Listner for responding to Reset button press
inputGrid.addEventListener("reset", function (reset) {
  removeGrid();
});
