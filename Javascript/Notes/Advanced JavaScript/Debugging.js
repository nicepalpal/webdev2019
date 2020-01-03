let flattened = [[0,1], [2,3],[4,5]].reduce(
  (a, b) => a.concat(b), []);

//We are assigning a variable, and it looks like we have an array - a nested array.
//It looks like it wants to flatten - we know that reduce means "A" is the accumulator, and "B" is the array, the iterator.
//The array at the end of the logic indicates the accumulator


let flattened = [[0,1], [2,3],[4,5]].reduce(
  (accumulator, array) => {
    console.log('array')
    console.log('accumulator', accumulator;)
    returnaccumulator.concat(array), []);


const flattened = [[0,1],[2,3], [4, 5]].reduce(
  (accumulator, array) => {
    debugger;
    return accumulator.concat(array)
  }, []);
