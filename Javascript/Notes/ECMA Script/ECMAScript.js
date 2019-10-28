//Use Babel if you want to compile ECMAScript to a form that all browsers recognize

//let + const - New Ways of Declaring Variables

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience >90){
  let WizardLevel = true;
}

//WizardLevel prints as false even though experience > 90 - why?

//If Let is inside a {}, it creates a new scope
//Var respects the global scope
experience = 80;
//Let allows you to change variables later

player = "Sally";
//Output - Assignment to contant variable error.
//Cannot change constants

//Take Aways
//Use Let as var for variables
//Use const for variables that will never change
//** Using constants on objects allows you to change values inside object, but not reassign the variable the objected is assigned to

const obj = {
  player:'bobby',
  experience: 100,
  wizardLevel = false
}

obj = 5
//Error Output
obj.WizardLevel = true;
//true

//Destructuring

const obj = {
  player:'bobby',
  experience: 100,
  wizardLevel = false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//Instead of writing above, Select properties you want from object
const { player, experience} = obj;

let {wizardLevel} = obj;

//Dynamic Property values
//Allows objects to have their properties defined by variables outside scope of object and be updated as those values change

const name = 'john snow';
const obj{
  [name]: 'hello'
  ['ray' + 'smith']: 'hihi'
}
//object/{3:'hihi", john snow: "hello"}


//If property and value are the same, can do new syntax
const a = "Simon";
const b = true;
const c = {};

//Old way
const obj = {
  a: a,
  b: b,
  c: c
}

//New Way
const obj = {
  a, b, c
}

//Template strings
//Old way
const newName = "Sally";
const newAge = 34;
pet = "horse"
const greeting = "Hello " + newName + "you seem to be doing well!"

//NewWay
//const newGreetingBest = `Hello ${newName} you seem to be ${newAge-10}. What a lovely ${pet} you have.`;

//Default Arguments

function greet(newName='', newAge=30, pet='cat'){
  return `Hello ${newName} you seem to be ${newAge-10}. What a lovely ${pet} you have.`;
}


//Javascript Symbol Type
//Symbols create completely unique values
//Doing sym2 === sym3 will return false in console
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

//Arrow functions

function add (a, b){
  return a + b;
}

const add = (a,b) => a+b;
