const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add some functionality to the buttons on this page. When pressing a button, the corresponding color should be applied to the box.
  1: Create a function removeAllColors which removes all color classes from the box.
  2: Create a function addColor which takes a class name as a parameter and adds the class to the box.
  3: Use the two functions in the event listeners of the buttons to color in the box when the button is clicked.
*/

redButton.addEventListener("click", () => {
  // Code here
  addColor("red", box);
});

blueButton.addEventListener("click", () => {
  // Code here
  addColor("blue", box);
});

greenButton.addEventListener("click", () => {
  // Code here
  addColor("green", box);
});

grayButton.addEventListener("click", () => {
  // Code here
  addColor("gray", box);
});

// Write your two functions below:
function addColor(color, element) {
  element.removeAttribute("class");
  element.classList.add("box");
  element.classList.add(color);
}
