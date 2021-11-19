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

// console.log(persons)

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

//fullName function
const  favour = getFullName = (first_name, last_name) => {
    return `${first_name} ${last_name}`;
};

console.log(favour("lois", "presh"))

//addition
const addition = (a , b)=>{
    let sum= a * b;
    return sum;
}
console.log(addition(5,9))

// Area of a circle
const AreaOfACircle = (radius)=> {
    let area = Math.PI * (radius * radius)
return area;
}

console.log(AreaOfACircle(20))

//temperature converter  (32°F − 32) × 5/9 = 0°C
const temperatureConverterCelsiusToFahrenheit = (oF) =>{
    let oC = (32*oF - 32) * 5/9
    return oC;
}

console.log(temperatureConverterCelsiusToFahrenheit(25))

const temperatureConverterFahrenheitToCelsius = (oC) =>{
    let oF = (oC * 9/5) + 32
    return oF;
}

console.log(temperatureConverterFahrenheitToCelsius(25))

//Body mass index(BMI)
const bmi = (weight, height) => {
    let kg = 0.45359237;
    weight = weight * kg;
    let bmi = weight / (height * height)
    if (bmi < 18.5){
        return `${'Your weight is Underweight'}`
    }else
    if(bmi >= 18.5 && bmi <= 24.9){
        return `${'Your weight is Normal Weight'}`
    }else
    if(bmi >= 25 && bmi <= 29.9){
        return `${'Your weight is Overweight'}`
    }else
        return `${'You are Obese'}`
}

console.log(bmi(52, 5.7))

/*
spring runs from March 1 to May 31;
summer runs from June 1 to August 31;
fall (autumn) runs from September 1 to November 30; and
winter runs from December 1 to February 28 (February 29 in a leap year).
 */

const checkSeason = (month) => {
        if(month === 'December' || month === 'January' || month === 'February'){
            return `${'The current season of the year is winter'}`
        }else
        if(month === 'March' || month === 'April' || month === 'May'){
            return `${'The current season of the year is spring'}`
        }else
        if(month === 'June' || month === 'July' || month === 'August'){
            return `${'The current season of the year is summer'}`
        }else
        if(month === 'September' || month === 'October' || month === 'November'){
            return `${'The current season of the year is spring'}`
        }
  }

console.log(checkSeason('January'))

function printArray(...list) {
   for(const lists in list){
      console.log(list.slice(0, -1))
   }
}

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',     
    'D3.js',
];

printArray(skills.slice(0, 2))

const shuffleArray = (list) => {
  let emptyArray;
    emptyArray = Math.floor(Math.random() * list)
    return emptyArray;
}
console.log(shuffleArray(skills));

//factorial

const factorial = (num) =>{
    let sum = 1;
    for(let i = num; i > 0; i--){
       sum *= i
    }
    return sum;
}

console.log(factorial(4))

const isEmptyFunction = (listIsEmpty) => {
    if(listIsEmpty > 0){
      return false;
    }else
        return true;
}
console.log('Is Container Empty ?',isEmptyFunction(0))

const average = (list) =>{
    let sum = 0;
    let average;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    average = sum/2;
    return average;
}

const array = [21,30,60,44,27,19,48,14,23]
console.log(average(array));

