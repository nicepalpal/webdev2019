function first(){
  var greet = 'Hi';
  function second(){
    alert(greet);
  }
  return second;
}

var newFunc = first();
newFunc();


//---------------Below allows us to constantly reassign greet as a constant which prevents conflicts, as it is in the scope of the function

const first = () =>{
  const greet = 'Hi';
  const second = () =>{
    alert(greet);
  }
  return second;
}

const newFunc = first();
newFunc();

//In the above code, 'return second' occurs, so the first function is not actually being ran again
//However it will always return the alert(greet), because the child scope remembers the parent scope

//Closures - a function ran, the function executed. It's never going to execute again
//BUT it's going to remember that there are references to those variables
//So the child scope always has access to the parent scope

//Currying - the process of converting a function that takes multiple arguments into one that takes arguments one at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);
//This above curriedMultiply has a function in a function return a, then the function b which is a * b;
//To make work properly, has to have following syntax

curriedMultiply(3)(4);
//12

//Use Case
const multiplyBy5 = curriedMultiply(5);

multiplyBy5(5);
//25

multiplyby5(10);
//50


//Compose - the act of putting two functions together to form a third function where the output of one function is the input of another
const compose = (f, g) => (a) => f(g(a));

//F is a function, and g is a function at the end there

const sum = (num) => num + 1;

compose(sum, sum)(5);

//compose(sum, sum) => (5) => (sum(sum(5)))
//sum(5) = 6, outer-bracket sum(6) = 7
//Output is 7

//Avoiding SIde effects, Functional Purity

//Side effects are anything that happen inside the function that we do not know about e.g. writing to console.console.log();
//Always want to avoid undefined and return something
//Input (arguments) -> Function -> Return (value)
//Determinism -> whatever we put in the input always returns the same value no matter how many times we run it

//Side Effect Example
var a = 1;
function b(){
  a = 2;
}
