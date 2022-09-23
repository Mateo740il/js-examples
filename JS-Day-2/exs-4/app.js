let arr=[23,45,5,67,87,44,68,29,12,99];
let emptyArray=[];
let j=0;
let max=0;


for(let i=0;i<arr.length;i++){
   if(arr[i]>arr[i-1]){
       max=arr[i]
   }
}

console.log(max);

while(j<10){
    emptyArray.push(j);
    j++;
}

console.log(emptyArray);

x=1;
y=1;

do{
    do{
        console.log(x+" * "+y+" = "+x*y);
        y++;
    }while(y<10);
    y=1;
    x++;
}while(x<10);