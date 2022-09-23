let arr=[1999,2023,1987,2019,2008,2025,1956,2022];
let newArray=[12,3,6,23,77,29,1,92];
let arr2D=[
    [10, 20, 30],
    [33, 60, 1],
    [12, 13, 14],
    [0, 5, 99]
];
let max=0;
let min=100;


function biggest(e,i){
    
    console.log(e,i)
}

arr.forEach(biggest);

for(let i=0;i<arr.length;i++){
    if(arr[i]>max) {
        max=arr[i]
    }
}

console.log(max);

newArray.forEach((e,i)=>{
    if(e<min){
       min=e;
       console.log(e,i)
    };
});

console.log(min);


let res=0;

for (let x = 0; x < arr2D.length; x++) {    
    for (let y = 0; y < arr2D[x].length; y++) {
        if(y===arr2D[x].length-1){
            res+=(arr2D[x][arr2D[x].length-1])
        }
    }
}

console.log(res);