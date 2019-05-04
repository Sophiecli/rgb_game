// console.log("Connected!");

var numbers = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var prompt = document.querySelector("#prompt");
var header = document.querySelector(".header");
var newGame = document.querySelector("#newGame");
var mode = document.querySelectorAll(".mode");


init();

function init() {
  setupModes();
  
  setupColors();

  reset();
}

// Choose Easy or Hard Mode -- eventListener 
function setupModes() {
  for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function() {
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numbers = 3 : numbers = 6;
      reset();
    });
  }
}

// Loads all squares with colours, selects and sets up the RGB colors
function setupColors(){
  for (var i = 0; i < squares.length; i++) {

    squares[i].addEventListener('click', function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        prompt.textContent = "CORRECT!!";
        newGame.textContent = "Play Again?";
        changeColor(clickedColor);
      } else {
        this.style.backgroundColor = "#4abdac";
        prompt.textContent = "Try again...";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numbers);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  header.style.backgroundColor = "#4abdac";
  prompt.textContent = "";
  newGame.textContent = "New Colors";
}


newGame.addEventListener("click", function() {
  reset();
});


function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    header.style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}


// easy.addEventListener("click", function(){
//   this.classList.add("selected");
//   hard.classList.remove("selected");
//   numbers = 3;
//   colors = generateRandomColors(numbers);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]) {
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = 'none';
//     }
//   }
//   // console.log(block);
//   // block();
// });


// hard.addEventListener("click", function(){
//   this.classList.add("selected");
//   easy.classList.remove("selected");
//   numbers = 6;
//   colors = generateRandomColors(numbers);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//       squares[i].style.background = colors[i];
//       squares[i].style.display = 'block';
//     }
// });
