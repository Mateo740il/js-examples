const multidimensional = [
    [10, 20, 30],
    [33, 60, 1],
    [12, 13, 14],
    [0, 5, 99]
];

let zbroj=0;

for(let i=0;i<multidimensional.length;i++){
    for(let j=0;j<multidimensional[i].length;j++){
        if(j===multidimensional[i].length-1){
         zbroj+=(multidimensional[i][multidimensional[i].length-1])
        }
    }
}

console.log(zbroj);