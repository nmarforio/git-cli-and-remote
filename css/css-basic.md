Inline style:

<div style ="color: red"> Hello CSS </div>

Block stile:

<Style>
    div {
        background color: green;
    }
</Style>

link to css:

<link rel="stylesheet" href="style.css"> Always checking if the link works!!!

the star meaning applies to all:
\*{
}

.name is for class
#name is for the id
px = pixel
Root{
variables that you can link inside the css style file
}
margin: 10 (top-bottom) 20(left-right)
margin: 10px 5px 10px; clock wise so the left in this is 5px is copied form the right one

div : after
div : before used to put some emojie or whatever element before the tag in this case <div>

> refers to the direct children of the parent
> cake.list li: the space between the 2 names mean all the children under the cake.list also not direct child

Using FELXBOX
.class{
display: flex;
}

Positioning:
element {
position: static; (default)
}
element{
position: relativ; without relativ no movement, with it you can move the element
left/right: 65px;
}
position: absolut; is another layer on top of your website-conected always wiht the last relativ position

position: fix; is fixed on the website and doesn't metter if you scroll or do whatever

position: sticky; the element is a sticker so is sticked where we decide ex: bottom or top
top/bottom: 0

z-index: mean if this element appire in front or behind the other element

Cascade/specificity:
if you have more then one style for the same element, is the second one in the css doc to be applied is a cascade

the class has a bigger specificity then a normal tag es h1 or .heading(win)
2classes are better then one
id is better then any classes

https://getbem.com

if you wanna select a spefici elemente in your css block like the quiz app cards
you do: .card**button(double underscore) is selecting the element !!!HTLM NEED THE SPESIFIC NAME TOO!!
ES: <img class="card**imagine"> css .card\_\_imagine{}

CSS Grid:
use gap instade margin
span is for cells 2
lines grid-cloumn: 1/3 from line 1 to 3 which is 2 cells

CSS Area
template is in "string"
asign the area to the element is normal no ""
