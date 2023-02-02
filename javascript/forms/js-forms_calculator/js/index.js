console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const numberA = parseInt(data.numberA);
  const numberB = parseInt(data.numberB);
  const operator = data.operator;
  let result;

  // --v-- write your code here --v--
  if (operator === "addition") {
    result = add(numberA, numberB);
  } else if (operator === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (operator === "multiplication") {
    result = multiply(numberA, numberB);
  } else if (operator === "division") {
    result = divide(numberA, numberB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
