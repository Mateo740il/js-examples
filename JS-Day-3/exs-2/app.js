let str="When I grow up I would like to work as a Frontend developer";
let emptyStr="hel";

function ext(el,num){
    if(el!=="" && el.length>num){
        let result= el.substring(num);
        console.log(result);
    }
    else{
        console.log("string is empty or to small");
    }
}

ext(str,4);
ext(emptyStr,3);