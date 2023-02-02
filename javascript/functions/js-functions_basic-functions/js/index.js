console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const bookTitle = "Oceano Mare";
const author = "Alessandro Baricco";
let rating = 4.5;
let salesNumber = 1590;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log("Ttitle: " + bookTitle);
  console.log("Author: " + author);
  console.log("Rating: " + rating);
  console.log("Sales: " + salesNumber);
}

logBookData();

rating = 5.0;
salesNumber = 2000;

logBookData();

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
salesNumber = 2345;
logBookData();

salesNumber = 3456;
logBookData();

// --^-- write your code here --^--
