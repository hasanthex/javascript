
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
}

function Dog(name, breed) {
    Animal.call(this, name);  // inherit properties
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} is barking.`);
}

const dog = new Dog('Rex', 'German Shepherd');
dog.eat();      // Rex is eating.
dog.bark();     // Rex is barking.
