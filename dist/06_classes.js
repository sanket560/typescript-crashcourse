"use strict";
// classes
// class is used to create multiple object
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registerd`;
    }
}
const person_1 = new Person(1, 'sanket');
const person_2 = new Person(2, 'sanket two');
console.log(person_1.register());
// subclass of person
class Employe extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employe(3, "E1", 'DEVELOPER');
console.log(emp1.register());
