//Ternary Operator

//condition ? exp1: exp2;

function isuserValid(bool){
  return bool;
}

var answer = isUserValid(true) ? "You may enter": "Access Denied"

var automatedAnswer =
  "Your account number is" + ( isUserValid(false) ? "1234" : "Not Available")


//Switch statements
function moveCommand(direction){
  var whatHappens;
    switch (direction){
      case "forward":
        whatHappens = "You encounter a monster";
        break;
        //IF this case is met, break out of the switch statement no longer need to check the other cases
      case "back":
        whatHappens = "You arrived home";
        break;
      case "left":
        whatHappens = "You encounter JESUS";
        break;
      case "right":
        whatHappens = "You encounter SATAN";
        break;
      default:
        whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}
