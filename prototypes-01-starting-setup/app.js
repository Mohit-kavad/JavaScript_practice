// class AgedPerson{
//     printAge(){
//         console.log(this.age);
//     }
// }

// class Person extends AgedPerson {
//   name = "Max"
//   constructor() {
//     super()
//     this.age = 30;
//   }
//   greet() {
//     console.log(`Hi,i am ${this.name} ,and i am ${this.age} year Old`);
//   }
// }

function Person(){
    this.name = 'max';
    this.age = 30;
    this.greet = function(){
        console.log(`name = ${this.name} and age = ${this.age}`);
    }
}

Person.discribe = function(){
    console.log('Creating Persons...');
}

console.dir(Person);

const person = new Person();
person.greet();
// person.printAge();
console.log(person.__proto__);
console.dir(Object)

