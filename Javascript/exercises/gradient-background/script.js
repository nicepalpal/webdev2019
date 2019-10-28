//Listen on the color inputs, output them to h3

//1. Declare inputs.

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.querySelector("#randomize")

//Instead of relying on the declared constants in CSS, intialize all the inputs in the script.

function initializeInputs()
{
  //Set color constants
  const col1 = "#ff0000";
  const col2 = "#ffff00";
  //Set the HTML Body elements CSS background property to linear gradient with the color constants we set
  body.style.background = `linear-gradient(to right, ${col1}, ${col2})`;
  //Set the color selector inputs to the color constants
  color1.value = col1;
  color2.value = col2;
  //Update the h3 text content to the text located in the Body elements CSS property
  css.textContent = body.style.background;

}

initializeInputs();

//Listeners for changes in the color input and clicking on the random button - callback function for changing the color or randomizing it
color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);
randomize.addEventListener('click', randomColor);

function colorChange(){
  //Change color based on color value - will update based on inputs
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background;
}

function randomColor(){
  //Run random function below to get 3 numbers between 0-255 (simulationg RGB format)
  let col1 = [rand(), rand(), rand()];
  let col2 = [rand(), rand(), rand()];
  //Convert random numbers to hex format
  let hex1 = convertToHex(col1);
  let hex2 = convertToHex(col2);
  //Set body background property to hex numbers
  body.style.background = `linear-gradient(to right, ${hex1}, ${hex2})`;
  //Update the color input values to the hex values
  color1.value = hex1;
  color2.value = hex2;
  css.textContent = body.style.background;

}

function convertToHex(numbers){
    //Map applies logic to each element in an array
    // '=>' can be a shortened way to say
    //numbers.map(function(num){return num.length});

    let hex = numbers.map(num=>{
      //.toString(16) converts a number to a hexidecimal value (letters)
        let converted = num.toString(16);
        //If hexidecimal value is less than 2 still, add converted to itself
        if(converted.length < 2)
        {
            converted += converted;
        }
        return converted;
    });
    //${} is a template literal, allows embedded expressions
    return `#${hex.join('')}`;
}


function rand(){
  //Math.floor gives full interger, no float
  //Math.random gives a numnber between 0 and 1
  //number between 0 and 1 * 255, then give full numbers
  //e.g. .33 * 255 == 84, then apply floor property to get 84
  return Math.floor(Math.random()*255);
}
