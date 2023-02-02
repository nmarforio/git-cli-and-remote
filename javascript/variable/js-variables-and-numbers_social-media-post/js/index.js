console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported

*/

// --v-- write your code here --v--
const title = "holidays";
const text = "Drinking at the beach";
let likes = 56;
const user = "Alice B.";
const isReported = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log(title);
console.log(text);
console.log((likes += 1));
console.log(user);
console.log(isReported);

//for the likes so:
likes++;
//then you can add it in the object
console.log({ title, text, likes, user, isReported });

// --^-- write your code here --^--
