class Car {
  constructor(options) {
    this.model = options.model;
  }

  drive() {
    console.log(`${this.model} says: vroooooom!`);
  }
};

var car = new Car({model: 'BWM'});
car.drive();
