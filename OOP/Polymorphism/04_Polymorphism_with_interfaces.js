/**
 * JavaScript is dynamically typed and does not have built-in support for interfaces.
 * However, polymorphism can be implemented by relying on "duck typing"
 **/

function makeNoise(animal){
    animal.speak();
}

let dog = {
    speak(){
        console.log('The dog Woof!');
    }
}

let cat = {
    speak(){
        console.log( 'The cat Meow!');
    }
}

makeNoise(dog);
makeNoise(cat);

/**
 *  Output
 *      The dog Woof!
 *      The cat Meow!
 **/