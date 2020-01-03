//Primitive types are immutable
//a = 5;
//In order to change what they 5 value is, you have to move it frm memory and make something knew e.g. a = 10;
//When you assign variable a to 5, memory somewhere is going to remember that a = 5;
//Assign b = 10; b does not really know about the existence of a
//This is called Pass By value

//PassByReference is assigning a and b as part of an object

var a = 5;
var b = 10;
//A now has an address of where the primitive value 5 sits in memory
//B now has an address of where the primitive value 10 sits in memory

var a = 5;
var b = a;
//Primitive types are passed by valuie

b++;
console.log(a);
//5
console.log(b);
//6
//This is because of pass by value - Javascript copies the primitive value type 5 (ala b = 5)
//Basically copying the value of a and putting it into a new memory space in our machine for b

let obj1 = {name: 'Yao', password: '123'};
let obj2 = object1

obj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2)

//{name: 'Yao', password: 'easypeasy'}
//{name: 'Yao', password: 'easypeasy'}
//This is due to pass by reference
//Objects in Javascript are stored in memory and passed by reference - values are not copied


//Below, object 1 and object 2 are both referencing a shelf in memory with the below information
//let obj1 = {name: 'Yao', password: '123'};
//let obj2 = object1
//aka let obj2 = 'address in memory with the above info'

//Calling obj2.password = 'easypeasy' means changing the password on the object in memory that obj1 is also referencing to

//Why is this good?
//Just referencing one object (location) in memory saves space

//Arrays are also objects
var c = [1, 2, 3, 4, 5]
var d = c;

d.push(18762)
console.log(d);
//[1, 2, 3, 4, 5, 18762]
console.log(c);
//[1, 2, 3, 4, 5, 18762]

//How to do this so c isn't changed?

var c = [1, 2, 3, 4, 5]
var d = [].concat(c);
d.push(18762)
console.log(d);
//[1, 2, 3, 4, 5, 18762]
console.log(c);
//[1, 2, 3, 4, 5]

//objects
let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);


obj.c = 5;
console.log(clone);
//{a: 'a', b: 'b', c: 'c'};
//Clone object was not affected as we assigned it to a new object

//Newer way to clone an object
let clone2 = {...obj}

//What happens if we have an object inside an object?
let obj = {
  a: 'a',
  b: 'b',
  c: {
      deep: 'try and copy me'
  }
};

let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;
console.log(obj);
////{a: 'a', b: 'b', c: 5};
console.log(clone);
//{a: 'a', b: 'b', c: {deep: 'try and copy me'}};
console.log(clone2);
//{a: 'a', b: 'b', c: {deep: 'try and copy me'}};


//What if we change the object value?

obj.c.deep = 'hahahah';
console.log(obj);
//{a: 'a', b: 'b', c: {deep: 'hahahah'}};
console.log(clone);
//{a: 'a', b: 'b', c: {deep: 'hahahah'}};
console.log(clone2);
//{a: 'a', b: 'b', c: {deep: 'hahahah'}};


//Why did everything change even though we cloned it?
//The above clones we made are known as shallow clones - only cloning the first layer
//Having another object means there is another address
//How to do deep cloning?

let obj = {
  a: 'a',
  b: 'b',
  c: {
      deep: 'try and copy me'
  }
};

let clone = Object.assign({}, obj);
let clone2 = {...obj}

//This superClone can have performance implications if there are many many deep objects
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahahah';

console.log(obj);
//{a: 'a', b: 'b', c: {deep: 'hahahah'}};
console.log(clone);
//{a: 'a', b: 'b', c: {deep: 'hahahah'}};
console.log(clone2);
//{a: 'a', b: 'b', c: {deep: 'hahahah'}};
console.log(superClone);
//{a: 'a', b: 'b', c: {deep: 'try and copyt me'}};
