
function Person(name){
    this.name = name;
}

Person.prototype.age = 30;

const person = new Person("Bob");

console.log(person.name);   // Bob
console.log(person.age);    // 30

console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age'));  // false

