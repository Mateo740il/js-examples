let email="robin_scherbatskyh@example.com"

function hide(el){
    let newArray=el.split("@");
    let name=newArray[0].slice(0,7).concat("...");
    let mail=newArray[1];
    console.log(name.concat("@", mail));
};

hide(email);