console.log('Exercise 01');

/*
1. Create a class by using class declaration
2. Create a class by using class expression
*/

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  showCar(){
    console.log(this.model , this.year)
  }
}


let Japan = class JDMCars {
  constructor(mark, model) {
    this.mark = mark;
    this.model = model;
  }

  showCar(){
    console.log(this.mark , this.model)
  }
};

let toyota=new Japan("toyota","JZX90");
toyota.showCar();

let myCar=new Car("e34",1992)
myCar.showCar();