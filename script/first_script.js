const myHeading = document.querySelector("h1");
myHeading.textContent = "Mozzilla is Cool";

function sayOuch() {
  alert('Ouch! Stop poking me!');
}

//Define a function to hide fox when button one is clicked
function hideFox() {
  foxImage.style.visibility = 'hidden';
}

function showFox() {
  foxImage.style.visibility = 'visible';
}

function toggleFox() {
  if(foxImage.style.visibility == 'visible') {
    foxImage.style.visibility = 'hidden'
  }
  else {
    foxImage.style.visibility = 'visible'
  }
}

function changeColor() {
  var listTwo = document.getElementById('listTwo');
  listTwo.style.color = 'blue';
}
// Use a CSS selector to identify an element
var foxImage = document.querySelector('img');

// Assign the function to the onclick event on that element
foxImage.onclick = sayOuch;

var buttonToggle = document.getElementById('buttonToggle')
var buttonShow= document.getElementById('buttonShow')
var buttonHide= document.getElementById('buttonHide')

buttonShow.onclick=showFox;

buttonHide.onclick = hideFox;


// use css ID to identify button for color change
var buttonColor = document.getElementById('buttonColor')

// assign function show fox when button two clicked
buttonColor.onclick = changeColor;