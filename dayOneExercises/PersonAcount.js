const personAccount = {
    firstName: 'John',
    lastName: ' Queen',
    // let {firstName, lastName, incomes, expenses} = props

}



const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]

//regular function
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
console.log(sumAllNums(23,45,34,21,34,1,2,34,65,67,87,90,12,45,24,65))

//Arrow function
const sumAllNumbers = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}

console.log(sumAllNumbers(1, 2, 3, 4)) // 10
console.log(sumAllNumbers(10, 20, 13, 40, 10))  // 93
console.log(sumAllNumbers(15, 20, 30, 25, 10, 33, 40))  // 173
console.log(sumAllNumbers(23,45,34,21,34,1,2,34,65,67,87,90,12,45,24,65))

const  favour = getFullName = (first_name, last_name) => {
    return `${first_name} ${last_name}`;
};

console.log(favour("lois", "presh"))

const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const index = countries.findIndex((country) => country.length === 6)
console.log(index)


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenIndex = numbers.findIndex((n) => n % 2 === 0)
const firstOddIndex = numbers.findIndex((n) => n % 2 !== 0)
console.log(firstEvenIndex) // 0
console.log(firstOddIndex) // 1

//Functional programming some

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const someAreEvens = number.some((n) => n % 2 === 0)
const someAreOdds = number.some((n) => n % 2 !== 0)
console.log(someAreEvens) // true
console.log(someAreOdds) // true

//Functional programming every
const number_ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const allAreEven = number_.every((n) => n % 2 === 0)
const allAreOdd= number_.every((n) => n % 2 !== 0)

console.log(allAreEven) // false
console.log(allAreOdd)  // false

const evens = [0, 2, 4, 6, 8, 10]
const someAreEven = evens.some((n) => n % 2 === 0)
const someAreOdd = evens.some((n) => n % 2 !== 0)

console.log(someAreEven) // true
console.log(someAreOdd)  // false

const product = ()=>{
    const products = [
        { product: 'banana', price: 3 },
        { product: 'mango', price: 6 },
        { product: 'potato', price: ' ' },
        { product: 'avocado', price: 8 },
        { product: 'coffee', price: 10 },
        { product: 'tea', price: '' },
    ]
    // for()
}