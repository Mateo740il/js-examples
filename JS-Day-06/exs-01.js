console.log('--- Exercise 01: concat ---');
/*
1. Create two number arrays and concat them
2. Concat two array and add a object in between the arrays
3. Add a string value to the end of an array by using the concat method
4. Create a deep clone of an array and prove that your clone is really a deep clone.
*/

let arr1=[2,5,7,9,11];
let arr2=[3,1,4,8,14];

let concatArray=arr1.concat({name:"mateo",surname:"bukic",id:25},arr2,"Apple");
console.log(concatArray);

 let coppyArr=concatArray.concat();
 console.log(coppyArr);