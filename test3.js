"use strict";

function isNumber(a) {
    let result;
    (typeof a === "number") ? result = "That's number" : result = "That's not a number";
    return result;
}

console.log(isNumber(10));
// That's number
console.log(isNumber("Hey there"));
// That's not a number
console.log(isNumber(true));
// That's not a number

let mult = (a, b) => {
    return a * b;
}

setTimeout(() => {
    console.log(mult(6, 10));
}, 1000);


function multiplyBy(a, mult) {
//The below line will break our logic, think about why.
    (typeof mult === 'undefined')? mult = 2 : 0;
    console.log(mult * a);
    
}
    
    multiplyBy(2);
    // should print - 4
    multiplyBy(2, undefined);
    // should print - 4
    multiplyBy(2, 0);
    // should print - 0
    multiplyBy(5, 10);
    // should print - 50
    