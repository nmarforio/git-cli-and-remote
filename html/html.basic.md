<label for="name">
<input name= "name" type="text"/>
<button type="submit">Submit 
<!--when you submit button is creating in the browser a request, we are gonna learn not to, and use the specific data for us -->

In Head <script defer src= javascript.js> DEFER means to execute the JS after reading all html!
queryselector is a option of the document you can assign to a spesific part of the html doc

const myform = document.queryselector <!-- query selector is giving you an information that has to saved in a variable in this case form, the word document is the html document-->

const myform = document.queryselector('[data-js="first-form"]')<!-- inside [square brakets] is the exact name of the element you wanna select wiht the queryselector!! THE NAME IS IN HTML -->

myform.addEventlistener('submit', (event) =>{
console.log('submit event fired: ', event)
}); <!-- to add an eventlistener you always need an document.queryselector that tells you where you wanna have the eventlistener done in this case in the form-->

<!-- the (event) you need it if you wanna see the result of your eventlistener, in this case the data of your submit button!! if you leave it empty nothing in console.log is shown-->

<h1 title ="party">hello</h1>
<form aria-labelledby = "title"> <!-- the title h1 element is now connected with the form aria-label for accessibility>
