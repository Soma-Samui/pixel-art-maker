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

  // First remove any existing grid
  removeGrid();
  
  for (let i = 0; i < height; i++){
    // Add the rows to the table
    let row = table.insertRow(i);
    
    for (let j = 0; j < width; j++){
      // Add the columns to the table
      let cell = row.insertCell(j);
    }
  }

  // Add Event Listner for responding to mouse single-click on the target cell
  table.addEventListener("click", function(event) {
    // Set the cell color as per user selected color
    event.target.style.backgroundColor = color.value;
  })

  // Add Event Listner for responding to mouse double-click on the target cell
  table.addEventListener("dblclick", function(event) {
    // Remove color from the cell
    event.target.style.backgroundColor = "rgb(255,255,255)";
  })
}

// Add Event Listner for responding to Reset button press
inputGrid.addEventListener("reset", function (reset) {
  
  // Remove any existing grid
  removeGrid();

  // Reset the Color Picker to default value
  defaultColor.value = "#000000";
});
