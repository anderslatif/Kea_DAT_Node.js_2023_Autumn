// Use const whenever possible
const scheduledBreakTime = "09:27";
let consoleLogCounter = 0;

// Use comma in console log
console.log("Let's take a break at:", scheduledBreakTime);
consoleLogCounter++;

// String, Number, Boolean, BigInteger, undefined, null, Object, Symbol
// Object: Object, Array, Date

// type coercion

// The 3 ways to make strings

console.log("This is the first '''''' way");
console.log('This is the second """""" way');
console.log(`This is the ${2 + 1}rd '''''' """"""" way ${scheduledBreakTime}
.`);
consoleLogCounter += 3;

console.log(consoleLogCounter);

