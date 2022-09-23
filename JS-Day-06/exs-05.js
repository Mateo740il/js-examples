console.log('--- Exercise 05: findIndex ---');

/*
1. Find index of banana and change the index value to '🍉'
*/

const fruits = ['🍎', '🥑', '🍌', '🍓', '🍏'];
console.log(fruits)
let find=fruits.findIndex(el=>el==="🍌")
fruits[find]="🍉"
console.log(find)
console.log(fruits)