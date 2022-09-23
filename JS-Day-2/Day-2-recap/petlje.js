let person={
    name:"Jhon",
    age:32,
    position:"Frontend-developer"
};

for(key in person){
    console.log("Key: "+key+" value"+person[key])
};

let arr=["Zagreb","Makarska","Split","Zadar","Osjek"];

for(elemnt in arr){
    arr[elemnt]="Croatia"
};

console.log(arr);

let info=new Set();
info.add("mateo");
info.add(32);
info.add("student");

for(el of info){
    console.log(el)
}

function yearCalculator(date){
    let years=date.getFullYear().toString();
    let curent=new Date().getFullYear().toString();
    let yourYears=curent-years
    return yourYears
}

console.log(yearCalculator(new Date(1996,11,17)))

let numberArray=[
    [13,56,32,11],
    [73,26,72,88],
    [15,59,37,19],
    [43,46,62,24]
];

for(let i=0;i<numberArray.length;i++){
    for (let y = 0; y < numberArray[i].length; y++) {
        if(numberArray[i][y]%2==0){
            console.log(numberArray[i][y])
        }
    }
}

function printRange(range){
    for(let c=1;c<=range;c++){
        let str=""
        for(let z=1;z<=c;z++){
            str+=z+" "
        }
        console.log(str)
    }
}


let unos=document.getElementById("unos");
let prazan=document.getElementById("empty");
let gumb=document.getElementById("gumb");

gumb.addEventListener("click",function(){
    if(parseInt(unos.value)>0){
        printRange(unos.value);
    }
    else{
        prazan.innerHTML="Niste unjeli broj"
    }
})
