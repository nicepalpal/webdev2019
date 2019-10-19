//When looking at the document in a Javascript console, it doesn't look like a browser, just as a normal HTML document because the browser hides it


document.getElementsByClassName('second')
document.getElementById('id')
document.getElementsByTagName


//below two are recommended
document.querySelector('h1') //only selects the first item thatit finds
document.querySelectorAll('li, h1'); //Selects all of the elements


//Need to select an element to use getAttribute
document.getAttribute

document.querySelector('li').getAttribute('random');

//set attributes - add second attribute/class/etc as a parameter in the set attribute method
document.querySelector('li').setAttribute('random', '1000');
document.querySelector('li')

//Changing stylesheet - select the element, use the style attribute, then whatever css property you want to change

document.querySelector("h1").style.background = "yellow"

//However the above has an issue with separation of concerns - adds an inline style, want CSS and HTML to be separate
var h1 = document.querySelector("h1")

h1.className = "coolTitle"

//Adding or removing classes to LI
document.querySelector("li").classList;
document.querySelector("li").classList.add("coolTitle");
document.querySelector("li").classList.remove("coolTitle")
document.querySelector("li").classList.add("done")

//toggle function for activating or removing class
document.querySelector("li").classList.toggle("done")

//innerHTML DANGEROUS - change actual HTML to have inline HTML?
document.querySelector("h1").innerHTML = "<strong>!!!!"

//Select child or parent getElementsByTagName
document.querySelectorAll("li")[1]
<li> Jello </li>
document.querySelectorAll("li")[1].parentElement;
<ul>_</ul>

document.querySelectorAll("li")[1].parentElement.parentElement;
<body>_</body>

//Gives all elements of the body
document.querySelectorAll("li")[1].parentElement.parentElement.children;
[h1, p#first, p.second, ul, first:p#first]

//Cache selectors in variables - useless to reselect everything, uses memory because the browser remembers that we need to select something
