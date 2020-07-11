var red = document.querySelector('#redValue');
var green = document.querySelector('#greenValue');
var blue = document.querySelector('#blueValue');

var visualizer = document.querySelector('.visualizer');

function renderColor() {
  visualizer.style.backgroundColor = `rgb(${red.Value}, ${green.Value}, ${blue.Value})`;
}

function updateValue(e) {
  var colorValue = e.target.nextElementSibling;
  colorValue.value = e.target.value;
  changeDivColor();
}

function changeDivColor() {
  var redValue = red.value;
  var greenValue = green.value;
  var blueValue = blue.value;
  visualizer.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}
