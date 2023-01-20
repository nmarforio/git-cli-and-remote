console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  // write your code here
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = (diameter1 / 2) ** 2 * Math.PI;
  const area2 = (diameter2 / 2) ** 2 * Math.PI;
  const pizzaGain1 = ((area2 - area1) / area1) * 100;
  output.textContent = Math.round(pizzaGain1);
  // write your code here
  console.log(pizzaGain1);
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
  const newWidth = (newSize / 24) * 100;
  pizzaElement.style.width = newWidth + "px";
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here
}
