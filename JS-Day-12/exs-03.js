console.log('Exercise 03');

/*
1. Create a class User that has the following properties: name, age and id
2. Use public field declarations to ensure that name and age is always present
3. Make the id of the user not changeable from the outside
4. Proof that your code works :)
*/

class User{
    name;
    age;
    #id=1;
    constructor(name="defaulty",age="21"){
        this.name=name
        this.age=age
    }
}

let user01=new User()
let user02=new User("Mateo", 35,5)
console.log(user01)
console.log(user02)