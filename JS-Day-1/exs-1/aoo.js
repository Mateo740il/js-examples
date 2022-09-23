// console.group("grup 1");
// console.log("I am in the group one");
// console.warn("Someone is in the bush");
// console.log("I will call for help");
// console.group("Group two is coming");
// console.error("Group is attacked")
// console.groupEnd();
// console.warn("GRoup one returns home");
// console.groupEnd();
let i = 0;

const log=()=>{

    while (i < 3) {
        setTimeout(() => {
            console.log(i);
        }, 100);

        i = i + 1;
        }
}

log()

for(let x=0;x<3;x++){
    setTimeout(() => {
            console.log(x);
        }, 100);
}