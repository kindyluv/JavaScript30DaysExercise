const dog = {
    name: 'jack',
    legs: 'four',
    color: 'black',
    age: '2',
    bark: {
        barking: 'woof woof'
    },
    getDogInfo: function () {
        return `${this.name} has ${this.legs} and its ${this.color}  in color and he is ${this.age} years old and he is barking ${this.bark.barking}`
    },
}
console.log(dog.getDogInfo())

dog.breed = 'German shepherd'
console.log(dog.getDogInfo())

const keys = Object.keys(dog)
console.log(keys)

const value = Object.values(dog)
console.log(value)

const entries = Object.entries(dog)
console.log(entries)
