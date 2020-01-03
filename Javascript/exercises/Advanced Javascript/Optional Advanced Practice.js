const input1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

//Take the above array, find numbers that are the same and push them to their own array where they are with similar numbers.
//If no similar number, just sit in the array.
//Afterwards, order the arrays

//Given this input how do we get y?
//Need to write logic for grouping similar numbers in arrays
//Write logic afterwards for ordering the arrays and numbers

//similarNumberArray
//Create a new array that will contain our total end result
//Need to somehow push a new array if there are matching numbers inside our new array to group them all together

let newArray =[]
const similarNumberArray = (array) =>{
  for (number of array){
    tempArray = array.filter(number);
    tempArray.push(newArray)
  }
  console.log(newArray)
  return newArray
}
