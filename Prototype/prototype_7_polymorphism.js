

function Animal(name){
    this.name = name;
}
Animal.prototype.speak = function(){
    console.log(`${this.name} speak not define yet.`);
};

function Dog(){
    Animal.call(this, 'Dog');
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = function() {
    console.log('Dog barks.');
};

function Cat(){
    Animal.call(this, 'Cat');
}
Cat.prototype = Object.create(Animal.prototype);


const animals = [new Dog(), new Cat()];
animals.forEach(animal => animal.speak());

// Dog barks.
// Cat speak not define yet.



