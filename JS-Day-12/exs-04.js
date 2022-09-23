console.log('Exercise 04');

/*
1. Create a Animal class that has the properties: name, speed and favoriteFood
2. Also add the methods speak, run, eat and getName
3. Everything should return a string like “NAME is eating”
4. Now create a Cat class that inherits from Animal and uses all the properties from the super class.
5. Add also a new property called owner.
6. Override the speak function so that it returns “meow”
7. Now create a Cat instance and test your code properly :)
*/

class Animal{
    constructor(name="some animal",speed=0,favoriteFood="some food"){
        this.name=name,
        this.speed=speed,
        this.favoriteFood=favoriteFood
    }

    speak(){
        return `Make some noise`
    }

    run(){
        return `${this.name} ruining ${this.speed} km/h`
    }

    eat(){
        return `${this.name} eating ${this.favoriteFood}`
    }

    get getName(){
        return "Animal name is "+this.name 
    }
}

class Cat extends Animal{
    constructor(name,speed,favoriteFood,owner){
        super(name,speed,favoriteFood)
        this.owner=owner
    }
    speak(){
        return `Meow`
    }
}

let newCat=new Cat("Snow",8,"milk","Jhon");
console.log(newCat);
console.log(newCat.speak());
console.log(newCat.run());
console.log(newCat.eat());
console.log(newCat.getName);
