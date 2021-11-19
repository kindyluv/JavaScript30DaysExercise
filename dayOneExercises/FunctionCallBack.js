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