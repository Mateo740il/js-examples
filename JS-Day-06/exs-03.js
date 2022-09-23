console.log('--- Exercise 03: filter ---');
/*
1. Filter all numbers that are higher than 10
2. Filter all prime numbers of the array
*/

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];

let newArr=numbers.filter(el=>el>10)
console.log(newArr);

let primeArr=numbers.filter((el)=>{
   for(let i = 2; i < el; i++)
    if(el % i === 0) return false;
  return el > 1;
})

console.log(primeArr)
