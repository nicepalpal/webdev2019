//Method to use on arrays
.flat()

const array = [1, 2, 3, 4, 5]
array.flat()
//Output [1, 2, 3, 4, 5]


const array2 = [1, [2, 3], [4,5]]
array2.flat()

//Output [1, 2, 3, 4, 5]

const array3 = [1, 2[3,4[5]]]
array3.flat();

//Output [1, 2, 3, 4, [5]]
//Only flattens one level, but can say how many layers to flatten the array2
array3.flat(2)
//Output [1, 2, 3, 4, 5]

//Flat can also clean up data for 'use strict';

const entries = ['bob', 'sally',,,,,,'cindy']

entries.flat()
//Output ["bob", "sally", "cindy"]

flatmap()
//Use flat and map method on an array

const arrayChaos = array2.flatMap(number => number + "hi im jesus");
//Output ["1hi im jesus", "2,3hi im jesus", "4,5hi im jesus"]

userEmail = '          eddytheeagle@gmail.com'
userEmail2 = '_jonnydangerous@gmail          '
userEmail.trimStart()
//Output 'eddytheeagle@gmail.com'
userEmail2.trimEnd()
//Output 'jonnydangerous@gmail.com'

//fromEntries
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]

Object.fromEntries(userProfiles)

//Output {commanderTom: 23, derekZlander: 40, hansel: 18}

//To get back to array format
const obj = Object.fromEntries(userProfiles)
Object.entries(obj)


//Try a piece of code, if any errors catch them
//Same thing as writing logic
//Try this, and if there are any errors try the catch block

try {
  true + 'hi'
} catch{
  console.log('You messed up')

}
