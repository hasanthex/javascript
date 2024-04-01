Person.prototype = {
    eat(){
        console.log(`${this.name} can eat.`);
    },
    sleep(){
        console.log(`${this.name} can sleep`);
    }
}

Person.prototype.gender = "Male";
function Person(name, age){
    this.name = name;
    this.age = age;
}

let p1 = new Person("Mr.Foo", 25);

console.log(`Name: ${p1.name}, Age: ${p1.age}`);
p1.sleep();
p1.eat();
console.log(p1.__proto__)