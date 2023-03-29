alert('assignment4 is loaded');

// 1. Create Person class that will create a "person" instance that will
// have a "name", "age", "nationality"
// and a function that will display all user informations
// 2. Create at least 4 "person" objects with ages 18, 23, 40, 45
// 3. create an array, and add all persons you have created before in that list
// 4. create a for loop and iterate through all persons
// 5. display person informations name, age, nationality in for loop for all persons older than 25
// if a person's name is shorter than 6 characters display console.log "person name is not valid"

class Person {
  constructor(name, age, nationality,) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  displayInfo() {
    console.log("Name: ", this.name);
    console.log("Age: ", this.age);
    console.log("Nationality: ", this.nationality);
  }
}

const person1 = new Person("Léal", 18, "Mexican");
const person2 = new Person("Bullet", 23, "French");
const person3 = new Person("Vivi", 40, "Swiss");
const person4 = new Person("Roulette", 45, "Chinese");
const person5 = new Person('Ema', 27, 'Italian');


const persons = [person1, person2, person3, person4, person5];

for (let i = 0; i < persons.length; i++) {
  const person = persons[i];
  if (person.age > 25) {
    person.displayInfo();
  }
  if (person.name.length < 6) {
    console.log(`${person.name} is not valid`);
  }
  console.log("-----------------------");
}