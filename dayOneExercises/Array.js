const array = [10].fill(5);
 console.log(array.length);
 array[0] = "itCompanies";
 array[1] = "Facebook";
 array[2] = "Google";
 array[3] = "Microsoft";
 array[4] = "Apple";
 array[5] = "IBM";
 array[6] = "Oracle";
 array[7] = "Amazon";
 array[8] = "JavaDoc";
 array[9] = "React";

 console.log(array)
console.log(array[0])
console.log(array[4], array[5])
console.log(array[9])

array[0] = "COMPANIES";
array[1] = "FACEBOOK";
array[2] = "GOOGLE";
array[3] = "MICROSOFT";
array[4] = "APPLE";
array[5] = "IBM";
array[6] = "ORACLE";
array[7] = "AMAZON";
array[8] = "JAVADOC";
array[9] = "REACT";

console.log(array)

let index = array.indexOf('FACEBOOK');
index !== -1 ? console.log("the company exist") : console.log("company doesnt exist");
console.log(array.includes("OO"));


console.log(array.join(' , '))

let sortedArray = array.sort();
console.log(sortedArray.join(' , '));
console.log(array.reverse())

console.log(array.slice(0,3))
console.log(array.slice(-3))
console.log(array.slice(-6,-5))

console.log(array.splice(0,1))
console.log(array.splice(4,2))
console.log(array.splice(-1,1))
console.log(array.splice(0,10))