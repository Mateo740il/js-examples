const polje = [
    [10, 20, 30],
    [33, 60, 1],
    [12, 13, 14],
    [0, 5, 99]
];

let res=0;

for (let x = 0; x < polje.length; x++) {    
    for (let y = 0; y < polje[x].length; y++) {
        if(y===polje[x].length-1){
            res+=(polje[x][polje[x].length-1])
        }
    }
}

console.log("rezultat je "+res);