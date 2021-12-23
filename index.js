const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//const totalBatteries = batteryBatches.reduce(function(accum, value) {
//    return accum + value
//})



//Refractored into an arrow function
const totalBatteries = batteryBatches.reduce((accum, value) => accum + value);