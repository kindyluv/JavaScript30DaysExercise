const persons = {
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
    'phoneNumber': '+123456789',
}
console.log(persons.firstName + ' ' + persons.lastName)
console.log(persons.age)
console.log(persons.country)
console.log(persons.city)
console.log(persons.phoneNumber)
console.log(persons.getFullName())

persons.nationality = 'Ethiopian'
persons.country = 'Finland'
persons.title = 'teacher'
persons.skills.push('Meteor')
persons.skills.push('SasS')
persons.isMarried = true

console.log(persons)

const personz = {
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
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
}
personz.nationality = 'Ethiopian'
personz.country = 'Finland'
personz.title = 'teacher'
personz.skills.push('Meteor')
personz.skills.push('SasS')
personz.isMarried = true

personz.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
        .slice(0, this.skills.length - 1)
        .join(', ')
    let lastSkill = this.skills.slice(this.skills.length - 1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
console.log(personz)
console.log(personz.getPersonInfo())
/*Asabeneh Yetayeh is a teacher.
    He lives in Finland.
    He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.
    Object Methods
There are different methods to manipulate an object. Let us see some of the available methods.

    Object.assign: To copy an object without modifying the original object*/

const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki',
    },
    getPersonInfo: function () {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    },
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log('copy',copyPerson)

const keys = Object.keys(copyPerson)
console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']