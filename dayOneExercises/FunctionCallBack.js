const sayHello = ()=>{
    console.log('Hello')
}
// setInterval(sayHello, 3000)
setTimeout(sayHello, 5000)

//Destructuring and Spread
const countries = ['Finland', 'Sweden', 'Norway']
const [fin, swe, nor] = countries
console.log(fin, swe, nor) // Finland, Sweden, Norway

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

const [frontEnd, backEnd] = fullStack
console.log(frontEnd, backEnd)

//Spread operator
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [...num] = nums
console.log(num) //1, 2, 3, [4, 5, 6, 7, 8, 9, 10]

const Countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland',
]

let [gem, fra, , ...nordicCountries] = Countries
console.log(gem, fra, nordicCountries)

//Destructing while looping
const europeanCountries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]

for (const [country, city] of countries) {
    console.log(country, city)
}

const FullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
]

for (const [first, second, third, fourth] of FullStack) {
    console.log(first, second, third, fourth)
}

//object destructuring
const rectangle = {
    width: 20,
    height: 10,
}

let { width, height } = rectangle
console.log(width, height)

//renaming keys using destructuring

let { width: w, height: h} = rectangle
console.log(w, h)

const props = {
    user:{
        firstName:'Asabeneh',
        lastName:'Yetayeh',
        age:250
    },
    post:{
        title:'Destructuring and Spread',
        subtitle:'ES6',
        year:2020
    },
    skills:['JS', 'React', 'Redux', 'Node', 'Python']
}

const {user, post, skills} = props
const {firstName, lastName, age} = user
console.log(firstName, lastName,age)
const {title, subtitle, year} = post
console.log(title, subtitle, year)
const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills
console.log(skillOne, skillTwo, skillThree, skillFour, skillFive)

const prop = {
    user:{
        firstName1:'Asabeneh',
        lastName1:'Yetayeh',
        age1:250
    },
    post:{
        title1:'Destructuring and Spread',
        subtitle1:'ES6',
        year1:2020
    },
    skills:['JS', 'React', 'Redux', 'Node', 'Python']

}

const {user:{firstName1, lastName1, age1}, post:{title1, subtitle1, year1}, skills:[skill1, skill2, skill3, skill4, skill5]} = prop
console.log(firstName1,lastName1, age1)
console.log(title1, subtitle1,year1)
console.log(skill1, skill2, skill3, skill4, skill5)

