//String Padding
.padStart()
.padEnd()
'Turtle'.padStart(10);
'Turtle'.padEnd(10);
//Returns Turtle with 10 spaces before or after, INCLUDING the string

//Trailing commas in functions, parameter lists, calls

const fun = (a, b, c, d,) => {
  console.log(a);

}

fun(1, 2, 3, 4,);
//output 1
//When you have really big parameter lists, they may begin to be written like this
//Easier to add a comma at end to add new parameters

const fun = (
              a,
              b,
              c,
              d,
              ) => {
  console.log(a);

}


//

Object.values
Object.entries
Object.keys

let obj = {
  username0: 'Santa',
  username1: 'Rudolf',
  username2: 'Mr. Grinch'
}


//Bellow allows you to use obj like array
Object.keys(obj).forEach((key, index) =>{
  console.log(key, obj[key]);
})

//Values method makes it super easy to output value of each object
Object.values(obj).forEach(value => {
  console.log(value);
})

//Outputs both key and value
Object.entries(obj).forEach(value => {
  console.log(value);
})

//Reassign username values to something new - user0, user1, user2 etc

let newUserName = Object.entries(obj).map(value => {
  //For each key value pair, so return array of Santa (value[1]) + username0 (value[0]) but take out the username and replace with empty string, so we just get Santa0
  return value[1] + value[0].replace('username', '')
});

//Async Await
