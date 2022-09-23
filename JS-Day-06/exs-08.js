console.log('--- Exercise 08: reduce ---');

/*
1. Sum all even numbers
2. Bond arrays contained in an array of objects using the spread operator and initial value.
*/

const numbers = [13, 56, 78, 89, 90, 33, 1, 23, 34, 66];
// expected output: 324

const sumNumbers=numbers.reduce((prevValue,currValue)=>{
    if(currValue%2==0) {
        return prevValue + currValue;
    }
    return prevValue
},0)

console.log(sumNumbers)

const myArray = [
    {
        name: 'Junior',
        employees: ['John', 'Doe', 'Jane', 'Doe']
    },
    {
        name: 'Senior',
        employees: ['Matija', 'Daniel', 'Mario', 'Mateja']
    }
]

let initial = ['Silvio'];
// expected output: ["Silvio", "John", "Doe", "Jane", "Doe", "Matija", "Daniel", "Mario", "Mateja"]

let namesArr=myArray.reduce((previousValue,currentValue)=>{
    return previousValue.concat(currentValue.employees)
},initial)

console.log(namesArr)