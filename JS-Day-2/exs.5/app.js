let newArray=["Mango","Bannana","Cherry","Apple"];
let matrix=[
    [1,2,3],
    [5,4],
    [7,8,9]
];
let numbers=[1,5,3,8,45,33,254,76,68,43];

for(let i of newArray){
    i+=" :)"
    console.log(i)
}

newArray.forEach((e,i)=>console.log(i,e));
matrix.forEach((e,i)=>{
    console.log("index is "+i+" and element is " + e)
})
numbers.forEach((e,i)=>{
    if(e%2){
        console.log(i,e)
    }
});
