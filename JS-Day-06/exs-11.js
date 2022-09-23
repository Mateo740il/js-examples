console.log('--- Exercise 11: splice ---');

/*
1. Remove zero elements from index 1 and insert "banana" and "orange"
2. Remove 2 elements from index 0 and insert "avocado"
*/

let fruits = ['apple', 'cherry', 'mango', 'blueberry']
// expected output of fruits: ["apple", "banana", "orange", "cherry", "mango", "blueberry"]
console.log(fruits);
fruits.splice(1, 0 ,"banana","orange");
console.log(fruits)
console.log("------------------")
let fruits2 = ['apple', 'banana', 'orange', 'cherry', 'mango', 'blueberry']
// expected output of fruits: ["avocado", "orange", "cherry", "mango", "blueberry"]
console.log(fruits2);
fruits2.splice(0, 2, "avocado");
console.log(fruits2)