function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}

const person1 = new Person('Alice');
const person2 = new Person('Bob');

console.log(person1.__proto__ === Person.prototype);    // true
console.log(person2.__proto__ === Person.prototype);    // true





