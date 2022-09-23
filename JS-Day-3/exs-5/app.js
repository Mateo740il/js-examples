function pyth(a,b,dec){
    let c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    return c.toFixed(dec);
};

console.log(pyth(3,5,2));

let start = Date.now(); // start measuring time
// job...
for (let i = 0; i < 1000000; i++) {
  let doSomething = i * i * i;
}
let end = Date.now(); // end measuring time
console.log(`The loop took ${end - start} ms`);