console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

function multiply(num1, num2) {
  return num1 * num2;
}
const eventHendler = () => {
  const numbers = firstInput.value;
  const realNumbers1 = parseInt(numbers);

  const numbers2 = secondInput.value;
  const realNumbers2 = parseInt(numbers2);

  result.textContent = multiply(realNumbers1, realNumbers2);
};

firstInput.addEventListener("input", eventHendler);

secondInput.addEventListener("input", eventHendler);
