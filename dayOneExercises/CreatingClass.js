class Person{
    // firstName = ""
    // lastName = ""
    // age= ""


    constructor(firstName, lastName, age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

const person = new Person("Lois","kindyluv","20+");
console.log(person)

class Child extends Person {

    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
    }

    get firstName() {
        return super.firstName;
    }

    set firstName(value) {
        super.firstName = value;
    }

    get lastName() {
        return super.lastName;
    }

    set lastName(value) {
        super.lastName = value;
    }

    get age() {
        return super.age;
    }

    set age(value) {
        super.age = value;
    }
}
newChild = new Child("Jahson", "Jahzeal", "Jada")