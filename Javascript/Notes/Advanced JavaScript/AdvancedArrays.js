//Advanced Arrays

const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) =>{
    double.push(num *2);
})

console.log('forEach',double);

//map, filter, reduce

//MAP

//Use map if you want to loop over an array and do something, forEach only iterates over a collection of elements and apply the operation we indicate
//Map always has a return element and stores the result of each invocation into another collection (here is mapArray)
//Map transforms the array and creates a new one, forEach just does some actions - requires a push
//forEach will have some side effects - creating a new array, pushing to another array, console.log etc
//Save to a new array with map

const mapArray = array.map((num) => {
  return num * 2;
});

console.log('map', mapArray);

//Cleaned up syntax

const mapArray = array.map(num => num * 2);
console.log('map', mapArray);


//FILTER
const array = [1, 2, 10, 16];
const filterArray = array.filter(num => num > 5);

console.log ('filter', filterArray);

//REDUCE
//Use accumulator to do something with the elements of the array
//Adding accumulator at the end of arguments
const array = [1, 2, 10, 16];
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num
}, 0);

console.log('reduce', reduceArray);
