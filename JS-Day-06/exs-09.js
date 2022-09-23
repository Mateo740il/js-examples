console.log('--- Exercise 09: slice ---');

/*
1. Extract the last two elements in the sequence.
2. Slice the last element of the array (imagine that the array length is not known before)
*/

const array = ['one', 'two', 'three', 'four', 'five', 'six'];
let myArray1=array.slice(-2);
console.log(myArray1);

let myArray2=array.slice(0,-1)
console.log(myArray2)