class Person {
    #name; // Private field
  
    constructor(name) {
      this.#name = name;
    }
  
    getName() {
      return this.#name;
    }
  
    setName(newName) {
      this.#name = newName;
    }
  }
  
  const person = new Person('John');
  console.log(person.getName()); // John
  
  person.setName('Doe');
  console.log(person.getName()); // Doe
  