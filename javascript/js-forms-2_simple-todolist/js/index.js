console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
const headline = document.querySelector("headline");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target); //or form
  const data = Object.fromEntries(formData);
  console.log(data);

  form.reset();
  form.headline.focus();

  newlist(data);
});

function newlist(tododata) {
  // the tododata is an object, that's why for textcontent we do tododata.headline
  const list = document.createElement("li");
  todoList.append(list); //to reach a ul or a deep element in the body is better to create a queryselector
  const headlineHTML = document.createElement("h3");
  const taskHTML = document.createElement("p");
  list.append(headlineHTML, taskHTML);

  headlineHTML.textContent = tododata.headline; //tododata.headline because the data object {data}
  taskHTML.textContent = tododata.task;
}
