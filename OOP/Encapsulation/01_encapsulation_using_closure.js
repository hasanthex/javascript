function Person(name) {
    let _name = name; // Private variable

    return {
      getName: function() {
        return _name;
      },

      setName: function(newName) {
        _name = newName;
      }
    };
  }
  
  const person = Person('John');
  console.log(person.getName()); // John

  person.setName('Doe');
  console.log(person.getName()); // Doe

  