// Zadatak 1

let i=9;
while(i>=0){
    console.log(i);
    i--;
}

// Zadatak 2

let arr=[5,45,23,16,75,34];
let sum=0;

for(let j=0;j<arr.length;j++){
    sum+=arr[j];
}

console.log(sum/arr.length);

// Zadatak 3

let numArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

for(let e =0;e<numArray.length;e++){
    if(numArray[e]%2){
        console.log(numArray[e]);
    }
}


// Zadatak 4

let emptyArr=[];
let num=1;

for(let x=0;x<3;x++){
    let emp=[];
    for(let y=0;y<3;y++){
        emp.push(num);
        num++;
    }
    emptyArr.push(emp)
}

console.log(emptyArr);

// Zadatak 5

let summ=function(polje){
    let zbroj=0;
    for(let l=0;l<polje.length;l++){
        for(let k=0;k<polje[l].length;k++){
            zbroj+=polje[l][k]
        }
    }
    return zbroj;
};

let randomArray=[
    [1,2,3],
    [5,4],
    [7,8,9]
]
console.log(summ(randomArray))