class Animal {
    speak(){
        return 'The animal makes a sound.';
    }
}

class Dog extends Animal{
    speak(){
        return 'The dog barks.'
    }
}

class Cat extends Animal {
    speak(){
        return 'The cat meows.';
    }
}

let animals = [new Dog(), new Cat(), new Animal()];

animals.forEach(animal => {
    console.log(animal.speak());
});

/**
 * Output
 *   The dog barks.
 *   The cat meows.
 *   The animal makes a sound.
 */