() we call the function with the parentesis
function should work only with local scope if is possible

<label for="name">
<input name= "name" type="text"/>
<button type="submit">Submit 
<!--when you submit button is creating in the browser a request, we are gonna learn not to, and use the specific data for us -->

In Head <script defer src= javascript.js> DEFER means to execute the JS after reading all html!
queryselector is a option of the document you can assign to a spesific part of the html doc

const form = document.queryselector <!-- query selector is giving you an information that has to saved in a variable in this case form, the word document is the html document-->

const form = document.queryselector('[data-js="first-form"]')<!-- inside [square brakets] is the exact name of the element you wanna select wiht the queryselector!! THE NAME IS IN HTML -->

form.addEventlistener('submit', (event) =>{
event.preventDefault()
console.log('submit event fired: ', event)
}); <!-- to add an eventlistener you always need an document.queryselector that tells you where you wanna have the eventlistener done-->
event.target.elements is givin us the opportunity to select the data we want in the form exemple submiton
event.target.document === form.document

<!-- the (event) you need it if you wanna see the result of your eventlistener, in this case the data of your submit button!! if you leave it empty nothing in console.log is shown-->

const newcard = document.createElement('section')<!--HTML section>
cardcontainer.append(newcard) <!-- first create the element then appending it in the DOM>
cosnt cardtext = textInput.value
newcard.textcontent = cardtext (which is the value)
newcard.innerHTML =

<div class="product__body"> <!-- Copy Paste from HTML and add the ${variable}-->
<div class="product__text-container">
<h2 class="product__name">${name}</h2>
      <ul class="product__categories">
        <li class="product__category">${category1}</li>
<li class="product__category">${category2}</li>
        <li class="product__category">${category3}</li>
</ul>
<p class="product__description"> ${description} </p>
    </div>
    <div class="product__image-container">
      <img
        class="product__image"
        src=${imageSrc}
alt=""/>
</div>

newcard.classlist.add('card')

name.toUpperCase() <!-- name is a string from a variable but it could work also with 'hello', as long is a string>
.touppercase() is a method which means is a function that JS provide
function is something we writing

arrays are order!
bla = [1,2,3]
bla.push(4) <!-- i put the number 4 at the last position in the array>
bla.pop()<!-- i delete the last number in the array () parentesis immer empty>

object {
name: 'martin',
occupation: 'developer',
}
object do not have an order, to point a specific element:

object['name'] <!-- Martin-->
object.name <!--Martin-->
object.name = 'jan' <!--Now the name is jan>
object.number = 4 <!--now the object has a number 4 {number: 4,}>
delete object.name <!-- Martin is now gone>

const people = [
{
name: "john",
age:23,
car: [bmw,mercedes,..],
},
{
name:"alex",
age:34,
},
];

people[0].name <!--John>
people[1].dog = 'rufus' <!-- the second object has dog rufus>
people.car.push('VW') <!-- Now car array has VW inside>

LOOPS:

while loop: the condition has to be inside of the block

let number = 5;
while (number > 0){
number -= 1;
};

for loop:

for (let count = 0; count < 5; count +=1){
conosle.log (Hello);
}
result: 5 x Hello

count = 0 <!--before looping start is the declaratin>
count < 5 <!--Condition is the count < 5 ? true fals or if statement -->
count +=1 <!--What we wanna do everytime at the end of the loop>

for-of: Loop for Array
const fruits = ['apple', 'mango','pomegranate','nut']
for every(const fruit of fruits){
console.log(fruit)
}
fruit is a variable is creating every time the loop is running
the variable fruit is exsiting only inside the loop!!!!

for-in: loop for Object
const pet = {
name: 'adf';
species: 'af';
}
for(const key in pet){
const value = pet[key];
console.log(${key} is ${value}) <!--so you see the kye (name,species,etc) and value is the [kye]-->
}

forEach, map, filter <!-- only working for ARRAY>

array1.forEach <!-- alwasy first the name of the array.map or forEach or filter>
you cannot return from forEach

map changes every element in arrays and you must return.

filter is sorting the element in the array and return it!
always return true or false creates a new array

const uppercasegame2000 = games
.filter(game =>{
return game.year < 2000 <!-- you can do .map after the first interaction cause the result after a filter is a array>
})
.map(game =>{
retunr game.name.toUpperCase()
})

.includes() <!-- works pretty good with string array or number array or boolean>
.indexof() <!-- is giving us the index position>
.lastindexof() <!-- last of the string index number>
.find() <!-- for object, need a return true or false after returning true is stops>
.findindex()

stundent.sort((stundendA,stundentB) => {
sort needs two parameters to be compaired
return 1 or -1 or 0 if you wanna to keep the same order in the array if you have two same parameters
sort is by a specific parameters if not is alphabetic and number by ascenden way
});
.slice()<!-- copy of the all array>
.some ()<!-- return true or false>
.every()<!-- return also true or flase>

type = module
import in js {autori} from './author.js'
import
