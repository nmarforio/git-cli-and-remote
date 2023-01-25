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

<!-- the (event) you need it if you wanna see the result of your eventlistener, in this case the data of your submit button!! if you leave it empty nothing in console.log is shown-->

const newcard = document.createElement('section')<!--HTML section>
cardcontainer.append(newcard) <!-- first create the element then appending it in the DOM>
cosnt cardtext = textInput.value
newcard.textcontent = cardtext (which is the value)
newcard.innerHTML = <div class="product__body"> <!-- Copy Paste from HTML and add the ${variable}-->

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
