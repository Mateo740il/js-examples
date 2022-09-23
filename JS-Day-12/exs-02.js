console.log('Exercise 02');
console.log('--------------------');

/*
1. Create a class Person with the attributes: firstName, lastName, job, age
2. Create a getter for the name that returns the first and last name
3. Create a setter for the first
4. Create a getter and setter for the age
5. Test your code :)
*/

class Person{
    constructor(firstName,lastName,job,age){
        this.firstName=firstName,
        this.lastName=lastName,
        this.job=job,
        this.age=age
    }
    get name(){
        return this.firstName+" "+this.lastName
    }

    get personAge(){
        return this.age
    }

    set name(newName){
        this.firstName=newName
    }

    set setAge(newAge){
        this.age=newAge
    }

    static staticMethod(a,b) {
        return `${a.firstName} meets ${b.firstName} `;
    }

}

let person01=new Person("Eric", "Smith","frontend-developer",28)
let person02=new Person("Michel", "Cooper","backend-developer",25)
console.log(person01.name , person01.age);
person01.name="Jhon";
person01.setAge=34
console.log(person01.name, person01.age);

console.log(person02.name, person02.age);
person02.name="Alan";
person02.setAge=37
console.log(person02.name, person02.age);

console.log(Person.staticMethod(person01,person02));