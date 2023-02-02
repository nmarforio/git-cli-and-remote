console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", () => {
  const letters = input.value;
  const lettersUppercase = letters.toUpperCase();
  console.log(lettersUppercase);
  input.value = lettersUppercase;
});
