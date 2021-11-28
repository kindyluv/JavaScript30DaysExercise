import * as ss from "simple-statistics";
import Gauss from "Stackd";

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
console.log('Count:', ss.count(ages)) // 25
console.log('Sum: ', Gauss.sum()) // 744
console.log('Min: ', ss.min()) // 24
console.log('Max: ', ss.max()) // 38
console.log('Range: ', ss.range()) // 14
console.log('Mean: ', ss.mean()) // 30
console.log('Median: ',ss.median()) // 29
console.log('Mode: ', ss.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',ss.var()) // 17.5
console.log('Standard Deviation: ', ss.std()) // 4.2
console.log('Variance: ',ss.var()) // 17.5
console.log('Frequency Distribution: ',ss.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
