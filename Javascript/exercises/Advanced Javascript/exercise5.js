// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newArray = array.forEach((num) =>{
    double.push(num *2);
})

let exclamationArray = []
const exclamationLoop = array.forEach(user => {
  let { username } = user;
  username = username + "!";
  exclamationArray.push(username);
})
console.log("exclamationForLoop", exclamationArray);



//Create an array using map that has all the usernames with a "? to each of the usernames


const exclamationMap = array.map(user => {
  let { username } = user;
  username = username + "!";
  return username
})
console.log('Mapped Array', exclamationMap);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => {
  return user.team === 'red'
})

console.log('Filtered Array', filterArray);
//Find out the total score of all users using reduce

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//1 the index position in the array
//2

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => {
	return num * 2;
})


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.


const newItemArray = array.map(user =>{
  user.items = user.items.map(item =>{
    item = item + "!";
    return item;
  })
  return user;
})
