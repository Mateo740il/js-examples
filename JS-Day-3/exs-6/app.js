// function caclAge(age){
//     let now=new Date();
//     let person=now.getFullYear()-age.getFullYear();
//     console.log(person)
// }

// caclAge(new Date(1996, 10, 17))

function calculateAge(age) {
  let diff_ms = Date.now() - age.getTime();
  console.log("diff_ms", diff_ms);
  let age_dt = new Date(diff_ms);
  console.log("age_dt", age_dt);
  return Math.abs(age_dt.getFullYear() - 1970);
}
console.log(calculateAge(new Date(1990, 11, 1)));