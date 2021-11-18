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

let sum = 0;
for(let i = 0; i < sorted.length; i++){
    sum += ages[i];
}
console.log(sum)

let average = sum /2;
console.log(average)

let maxMinusMin = maxAge - minAge;
console.log("Max - Min of age "+ maxMinusMin)

let minMinusMax = minAge - maxAge;
console.log("Min - Max of age "+ minMinusMax)

let minMinusAverage = Math.abs(minAge - average)
console.log("Min - Average of age "+ minMinusAverage);

let maxMinusAverage = Math.abs(maxAge - average)
console.log("Max - Average of age "+ maxMinusAverage);