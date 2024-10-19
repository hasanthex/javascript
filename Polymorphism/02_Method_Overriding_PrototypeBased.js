function Animal(){}
Animal.prototype.speak = function (){
    return "The animal makes a sound.";
}

function Dog(){}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = function (){
    return "The dog barks.";
}


let animal = new Animal();
let dog = new Dog();

console.log(animal.speak());
console.log(dog.speak());

/**
 * Output
 *  The animal makes a sound.
 *  The dog barks.
 **/