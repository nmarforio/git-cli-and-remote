console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const bonus = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}
function showBonus() {
  bonus.removeAttribute("hidden");
}
function hideBonus() {
  bonus.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideBonus();
hideTosError();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  const tos = data.tos;

  if (tos === "on") {
    return hideTosError(), alert("Form submitted"), showBonus();
  } else {
    return showTosError(), hideBonus();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
