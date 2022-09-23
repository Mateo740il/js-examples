console.log('--- Exercise 07: map ---');

/*
1. Map numbers array to an array of power 3 exponents
2. Map over the person array and add the fruit of the proper index to the persons name
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let expArray=numbers.map(el=>el**=3)
console.log(expArray);

const persons = ['Christina', 'Max', 'Matt', 'David', 'Sarah'];
const fruits = ['🍎', '🍌', '🍓', '🍍', '🍒'];

let personFruit=persons.map((el,index)=>el+" "+fruits[index])

console.log(personFruit)