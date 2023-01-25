console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

function multiply(num1, num2) {
  return num1 * num2;
}

firstInput.addEventListener("input", () => {
  const numbers = firstInput.value;
  const realNumbers1 = parseInt(numbers);
  return realNumbers1;
});

secondInput.addEventListener("input", () => {
  const numbers2 = secondInput.value;
  const realNumbers2 = parseInt(numbers2);
  return realNumbers2;
});

result.textContent = multiply(realNumbers1, realNumbers2);
