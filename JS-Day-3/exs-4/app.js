function setDec(a,b){
    // if(isNaN(a) && isNaN(b)){
    //     console.log("a,b are not numbers")
    // }
    // else{
    //    return a.toFixed(b);
    // }
   if(typeof a ==="number" && typeof b==="number"){
       return a.toFixed(b);
   }
   else{
       return "Ne radi"
   }
};

console.log(setDec(4.94812314,5));