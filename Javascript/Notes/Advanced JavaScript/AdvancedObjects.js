// reference type
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

object1 === object2;
//true
object1 == object3
//false
object1.value = 15
object2.value
//15
object3.value
//10
//When creating objects, these are new objects that Javascript does not know about
//var object1 = Box1
//When typing var object2 = object1, it is always referring to the object1 we created
//When typing object3 = Box3, it is its own box

--------------------------

// context (Vs scope)
//scope
function b(){
  //scope
  let a = 4;
}
console.log(a)
//no output, in child scope

//context
console.log(this);
//window output

functiona(){
  console.log(this);
}
a();
//window output
//this refers to what is to the left of the dot

const object4 = {
  a: function(){
    console.log(this);
  }
}

//output: {a: f}
//outputs the object



// instantiation
//make a copy of an object and reuse the code
class Player{
  constructor(name, type){
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hi, I am ${this.name}. I'm a ${this.type}.`)
  }
}

class Wizard extends Player{
  constructor(name, type){
    //Super passes name and type properties from parent class - runs the constructor and attatches it to the wizard
    super(name, type)
  }
  play(){
    console.log(`WEEEE I'm a ${this.type}.`)
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shaun', 'Dark Magic');


class Player{
  constructor(name, type){
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hi, I am ${this.name}. I'm a ${this.type}.`)
  }
}

class Wizard extends Player{
  constructor(name, type){
    //Super passes name and type properties from parent class - runs the constructor and attatches it to the wizard
    super(name, type)
  }
  play(){
    console.log(`WEEEE I'm a ${this.type}.`)
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shaun', 'Dark Magic');
