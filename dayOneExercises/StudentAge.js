const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let sorted = ages.sort()
console.log(sorted)
let maxAge = Math.max.apply(Math, ages)
let minAge = Math.min.apply(Math, ages)
console.log("maximum age " + maxAge, "minimum age " +minAge);

let median = Math.floor(sorted.length/2);
if(sorted.length %2 === 0){
    console.log(sorted[median]);
}
console.log(median)