console.log('--- Exercise 02: every ---');
/*
1. Check if numbers array has just numbers above 40 and print the result to the console
2. Use mySearchNumber to check if a specific number is in the numbers array by using every().
Afterwards print a sentence to the console like 'XX is in the array' or 'XX is not in the array'
3. Check if all persons have the type 'member' and print the result to the DOM.
*/

const numbers = [20, 40, 50, 100, 300, 12, 56, 40];
const mySearchNumber = 20;
console.log(numbers.every(el=>el>40))
console.log(numbers.every(el=>{
    if(el==mySearchNumber){
        console.log(mySearchNumber+" is in array")
    }
    else{
         console.log(mySearchNumber+" is not in array")
    }
}));

const persons = [
    {
        name: 'Max',
        type: 'member'
    },
    {
        name: 'Jim',
        type: 'member'
    },
    {
        name: 'Alex',
        type: 'member'
    },
    {
        name: 'Sandra',
        type: 'member'
    },
    {
        name: 'Sophia',
        type: 'member'
    }
];

const result = persons.every(person => person.type === 'member');
document.getElementsByTagName("body")[0].innerText=result