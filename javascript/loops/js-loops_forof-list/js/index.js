console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

for (const programmingLanguage of programmingLanguages) {
  console.log(programmingLanguage);
  const list = document.createElement("li");
  ol.append(list);
  list.textContent = programmingLanguage;
}

// --^-- write/change code here --^--
