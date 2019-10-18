//Signup Form

var database = [
  {
    username: "andrew",
    password: "supersecret"
  },
  {
    username: "jesus",
    password: "christ"
  },
  {
    username: "hey",
    password: "there"
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!"
  },
  {
    username: "Sally",
    timeline: "Javascript is sooo cool!"
  }
];

function isUserValid(username, password){
  for (var i=0; i < database.length; i++){
    if(database[i].username === username &&
        database[i].password === password){
        return true;
    }
  }
  return false;
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What'\s your password?");

function signIn(username, password) {
  if (isUserValid(username, password)) {
      console.log(newsFeed);
  } else {
   alert("Your user name and password is wrong.")
  }
}

signIn(userNamePrompt, passwordPrompt);
