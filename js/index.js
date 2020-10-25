
// DRUM BUTTONS

// Finds how many buttons we need to add event listeners to
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// Adds event listeners to specified buttons
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
// When one of the buttons are clicked this function is called
function handleClick() {

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(event_) {
  switch (event_) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "a":
      tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "s":
      tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "d":
      tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "j":
      crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "k":
      kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

    case "l":
      snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function (){activeButton.classList.remove("pressed");}, 100);
}
