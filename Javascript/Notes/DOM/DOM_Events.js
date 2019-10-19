//Can control events in the DOM - clicking, mouse hovers, keypress ETC
//Most common is mouse events and keyboard Events

//var button = document.getElementsByTagName("button")
//Above selection returns an array - better to choose the button in the array via index

//var button = document.getElementsByTagName("button")[0];
//addEventListener - arguments are the event and the function you run

//button.addEventListener("click", function(){
//  console.log("CLICK!");
//});

//button.addEventListener("mouseenter", function(){
//  console.log("MOUSE!");
//});

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
  return input.value.length;
}

function createListElement(){
  //Create an element
  var li = document.createElement("li");
  //Append the textNode and the value within the text node to the Li we made
  li.appendChild(document.createTextNode(input.value));
  //Append the li element (now with text node appended) to our UL
  ul.appendChild(li);
  //After creating an LI and adding it, reset input to be empty
  input.value = "";
}

//Listen for when the button is clicked makes sure text is entered
function addListAfterClick(){
    if(inputLength() > 0){
      createListElement();
    }
}

//Listen for when the enter key is pressed when inputting text - listeners on char codes for the keyboard
function addListAfterKeypress(event){
    //event.which is same as event.KeyCode
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
