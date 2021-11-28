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

//destructuring an array while looping
const languages = [
    { lang: 'English', count: 91 },
    { lang: 'French', count: 45 },
    { lang: 'Arabic', count: 25 },
    { lang: 'Spanish', count: 24 },
    { lang: 'Russian', count: 9 },
    { lang: 'Portuguese', count: 9 },
    { lang: 'Dutch', count: 8 },
    { lang: 'German', count: 7 },
    { lang: 'Chinese', count: 5 },
    { lang: 'Swahili', count: 4 },
    { lang: 'Serbian', count: 4 },
]

for (const { lang, count } of languages) {
    console.log(`The ${lang} is spoken in ${count} countries.`)
}

const rectangles = { width: 20, height: 10 }
const calculateArea = ({ width, height }) => width * height
const calculatePerimeter = ({ width, height } = 2 * (width + height))


const person = {
    firstName2: 'Asabeneh',
    lastName2: 'Yetayeh',
    age2: 250,
    country2: 'Finland',
    job2: 'Instructor and Developer',
    skills2: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages2: ['Amharic', 'English', 'Suomi(Finnish)'],
}
const values = person.skills2
values.forEach((value, i) => console.log(i, value.toUpperCase()))

   const {...list} = person
    console.log(list)
    const {...Skills} = person.skills2
    console.log(Skills)
    const {...lang} = person.languages2
    console.log(lang)


//forEach loop
const country = ['Finland', 'Estonia', 'Sweden', 'Norway']
country.forEach((value, i) => console.log(i, value.toUpperCase()))

const count = ['Finland', 'Estonia', 'Sweden', 'Norway']
const newCountries = []
count.forEach((country) => newCountries.push(country.toUpperCase()))

console.log(newCountries) // ["Finland", "Estonia", "Sweden", "Norway"]

const products = [
    { product_: 'banana', price: 3 },
    { product_: 'mango', price: 6 },
    { product_: 'potato', price: 0 },
    { product_: 'avocado', price: 8 },
    { product_: 'coffee', price: 10 },
    { product_: 'tea', price: 0 },
]
    for(const{product_, price} of products){
        console.log(`The price of ${product_} is ${price} euros.`);
    }

    let sum2 = 0
for({price} of products){
    sum2 = sum2 + price
}
console.log(sum2);

const countri = ['Finland', 'Estonia', 'Sweden', 'Norway']
countri.forEach(function (country, index, arr) {
    console.log(index, country.toUpperCase())
})
// const array = [1, 2, 3, 4, 5]
//
// function callbacks(item, i) {
//     return i;
// }
//
// const modifiedArrays = array.map(callbacks)
// console.log(modifiedArrays)
//
// // or syntax in an arrow function
//
// const callback = (item, i) => {
//     return i;
// }
// const modifiedArray = array.map(callback)
// console.log(modifiedArray)
// // prices_array = array.map(amount)
// // console.log(prices_array)
// const amounts = products.price;
// const ans = products.map(products.price)

// console.log(ans)
let product_array = [];
for(let{product_, price} of products) {
    product_array.push(product_)
    product_array.push(price)
}
console.log(product_array)
