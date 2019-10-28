//scope - Variable access - what variables do I have access to
//when code is running?

function aa(){
  console.log("test");
}

var = b "Can I access this? "

function bb(){
  var a = "hello";
};

//Trying to console.log(a) will not work as it is not in global scope

//However function bb can use variable b because it is in global scope


//Root Scope (window)

var fun = 5;
function funFunction(){
  //Child Scope
  var fun = "hellooo";
  console.log(fun);

}

function funnerFunction(){
  //Child Scope
  var fun = "Bye";
  console.log(fun);

}

function funnestFunction(){
  //Child Scope
  var fun = "AHHHH";
  console.log(fun);
}

console.log("window", fun);
//Output is 5
//Child scope only relates to the variables left in the function - cannot call variables outside of that scope, also will not be overwritten 
