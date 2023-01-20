console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const time = new Date().getHours();
  if (time >= 6 && time <= 12) {
    return "Good Morning";
  }
  if (time >= 13 && time <= 18) {
    return "Good Afternoon";
  }
  if (time >= 19 && time <= 22) {
    return "Good evening";
  } else {
    return "Good Night";
  }

  // Code here
}

function getDayColor() {
  const day = new Date().getDay();
  console.log(day);
  if (day === 1) {
    return "darkgray";
  } else if (day === 2 || day === 3 || day === 4 || day === 5) {
    return "lightblue";
  } else day === 6 || day === 0; //0 is sunday
  {
    return "hotpink";
  }
}
// Code here

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
