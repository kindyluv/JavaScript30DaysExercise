const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    getFullName: function() {
        return `${this.firstName} ${this.lastName} `
    },
    'married': true,
    'phoneNumber': '+123456789',
}
console.log(person.firstName + ' ' + person.lastName)
console.log(person.age)
console.log(person.country)
console.log(person.city)
console.log(person.married)
console.log(person.phoneNumber)
console.log(person.getFullName())