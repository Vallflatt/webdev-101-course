function Dog(name, age) {
  this.name = name;
  this.age = age;

  // TODO: Implement method "getHumanAge" where you will return the human age of a dog
  // assume 1 dog year equals 7 human years
  this.getHumanAge = function () {
    return this.age * 7
  }
  this.displayInfo = function (params) {
    console.log(`${this.name} is ${this.age}`);
  }
  // TODO: Implement method "displayInfo" where you will console.log dog's name and age
  // see example bellow
}

const ben = new Dog('Ben', 10);
const jen = new Dog('Jen', 5);

// should return 70
const benAgeToHumanYears = ben.getHumanAge();

// should return 35
const jenAgeToHumanYears = jen.getHumanAge();

// console.log - "Ben is 10"
ben.displayInfo();
// console.log - "Jen is 5"
jen.displayInfo();
