console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newEntry = document.createElement("li");
  toastContainer.append(newEntry);
  console.log(newEntry);
  const newMessage = "Hello everyone!";
  newEntry.textContent = newMessage;
  newEntry.classList.add("toast-container__message");

  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";

  // Exercise: Clear the stack of toast messages
});
