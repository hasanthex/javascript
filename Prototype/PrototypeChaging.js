function Person(){
    this.name = "Mr. Foo";
}
// add a new property
Person.prototype.id = 1;

const person1 = new Person();

// change ID property with new value
Person.prototype = {"id": 2};

const person2 = new Person();

console.log(person1.id);
console.log(person2.id);
