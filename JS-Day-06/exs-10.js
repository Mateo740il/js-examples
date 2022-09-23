console.log('--- Exercise 10: sort ---');

/*
1. Sort array of objects by name, ascending.
2. Sort array of objects by postalCode, descending
3. Sort array of objects by type and name, all ascending
*/

const cities = [
    { name: 'Zagreb', postalCode: 10000, type: 1 },
    { name: 'Varazdin', postalCode: 42000, type: 2 },
    { name: 'Split', postalCode: 21000, type: 2 },
    { name: 'Rijeka', postalCode: 51000, type: 3 },
    { name: 'Osijek', postalCode: 31000 },
    { name: 'Zadar', postalCode: 23000 }
];

function sortByName(a,b){
    if(a.name>b.name) return 1
    else if(a.name<b.name) return -1
    else return 0
}


function sortByPostalCode(a,b){
    if(a.postalCode>b.postalCode) return -1
    else if(a.postalCode<b.postalCode) return 1
    else return 0
}

function sortByTypeAndName(a,b){
    if(a.name>b.name||a.type>b.type) return 1
    else if(a.name<b.name||a.type<b.type) return -1
    else return 0
}

// console.log(cities.sort(sortByName));
// console.log(cities.sort(sortByPostalCode));
console.log(cities.sort(sortByTypeAndName));


// expected output for 1.:
// [
//     { name: "Osijek", postalCode: 31000 }
//     { name: "Rijeka", postalCode: 51000, type: 3 }
//     { name: "Split", postalCode: 21000, type: 2 }
//     { name: "Varazdin", postalCode: 42000, type: 2 }
//     { name: "Zadar", postalCode: 23000 }
//     { name: "Zagreb", postalCode: 10000, type: 1 }
// ]

// expected output for 2.:
// [
//   {name: "Rijeka", postalCode: 51000, type: 3}
//   {name: "Varazdin", postalCode: 42000, type: 2}
//   {name: "Osijek", postalCode: 31000}
//   {name: "Zadar", postalCode: 23000}
//   {name: "Split", postalCode: 21000, type: 2}
//   {name: "Zagreb", postalCode: 10000, type: 1
// ]

// expected output for 3.:
// [
//   { name: "Zagreb", postalCode: 10000, type: 1 }
//   { name: "Split", postalCode: 21000, type: 2 }
//   { name: "Varazdin", postalCode: 42000, type: 2 }
//   { name: "Rijeka", postalCode: 51000, type: 3 }
//   { name: "Osijek", postalCode: 31000 }
//   { name: "Zadar", postalCode: 23000 }
// ]