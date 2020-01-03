//Old way of looping
//1
const basket = ['apples', 'oranges', 'grapes'];

for ( let i = 0; i < basket.length; i++){
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

//New ways to looping

//for of
//This is called ITERATING
//Iterating - Able to go one by one through an item, like a basket, and look at these items
//Iterating can be done on iterables - Javascript provides these and says 'you can iterate over this anything
//Iterables - arrays, strings
for(item of basket){
  console.log(item);
}


//for in -- works with objects, gives properties
//This isn't iterating - that is something with arrays and strings
//With an object, this is called ENUMERATING
//Properties of an object are called enumerables
//Can be used in a for in loop to check them out
//You can use arrays and strings in a for in loop because arrays and strings are objects

const detailedBasket = {
  apples: 2,
  oranges: 5,
  grapes: 10
}

for (item in detailedBasket){
  console.log(item)
}

//apples, oranges, grapes
