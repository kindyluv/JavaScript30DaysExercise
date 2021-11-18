const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let sorted = ages.sort()
console.log(sorted)
let maxAge = Math.max.apply(Math, ages)
let minAge = Math.min.apply(Math, ages)
console.log("maximum age " + maxAge, "minimum age " +minAge);