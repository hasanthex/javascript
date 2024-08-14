const animal = {
    speak(){
        console.log(`${this.name} make a sound.`);
    }
}

const dog = Object.create(animal);
dog.name = "Rex";
dog.speak();    // Rex make a sound

console.log(dog.__proto__);     // { speak: [Function: speak] }
console.log(Object.getPrototypeOf(dog) === animal);     // true



