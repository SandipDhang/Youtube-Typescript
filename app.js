"use strict";
// FUNCTION OVERLOADS
function combineValues(val1, val2) {
    if (typeof val1 === "string" || typeof val2 === "string") {
        return val1.toString() + val2.toString();
    }
    return val1 + val2;
}
var myValue = combineValues(10, 20);
console.log(myValue);
