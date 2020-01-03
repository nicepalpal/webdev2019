//1 is equal to string 1
1 == '1'
//true
//Type Coercion is the language converting a type to another type - Javascript is deciding here that we mean the number 1 for the string 1

//Javascript has a lot of type coercion because it is dynamically typed

//Type coercion happens when you use the ==
//Simply means compare the two values - if they have differrent values, coerce one to the same type

//Is not 1 === '1' but should pretty much always use === - == does not have predictable code

//Other Type coercion

if (1){
  console.log(5)
};

//output: 5 - but Javascript coerces the number value 1 to mean true

if (0){
  console.log(5)
};
//output: false -- Javascript type coerces 0 to false

//-0, +0

-0 === +0

//output: introduce

Object.is(-0, +0)
//output: false;

NaN === NaN
//false

Object.is(NaN, NaN)
//true
