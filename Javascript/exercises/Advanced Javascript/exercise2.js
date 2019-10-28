//#1 change this function into a ternary and assign it to variable called experiencePoints
function winBattle(bool){
  return bool;
}

var experiencePoints = winBattle(false) ? 10: 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
//Nothing

//#3 return value when moveCommand("back");
//You arrived home

//#4 return value when moveCommand("right");
//You Found a river

//#5 return value when moveCommand("left");
//Nothing

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function iceCreamCritic(flavor){
  var review;
  switch (flavor){
    case "vanilla":
      review = "What a boring flavor!";
      break;
    case "chocolate":
      review = "Pretty tasty, but could pick something different than the usual!";
      break;
    case "cookie dough":
      review = "Amazing! But you may get sick...";
      break;
    case "mint chocolate":
      review = "You either love it or hate it!";
      break;
    default:
      review = "Never heard of that flavor, try a different one!";
  }
  return review;
}
