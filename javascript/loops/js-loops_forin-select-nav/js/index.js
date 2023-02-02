console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
for (const language in languages) {
  const lang = document.createElement("option");
  select.append(lang);
  lang.value = language;
  lang.textContent = languages[language];
}

// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--
for (const element in nav) {
  const list = document.createElement("li");
  ul.append(list);
  const tag = document.createElement("a");
  //const value = nav[element]
  tag.href = nav[element].href; // value.href
  tag.textContent = nav[element].text; //value.text
  list.append(tag);
}
// --^-- write/change code here --^--
