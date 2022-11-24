"use strict";
const test = [1,3,5,7,2,9,4];
const filterRange = (arr, min, max) => {
    return arr.filter(item => item >= min && item <= max);
    let result = [];
    for (let i of arr) {
        if (i >= min && i <= max) {
            result.push(i);
        }
    }

    return result;
};
let filtered = filterRange(test, 3, 8);
console.log(filtered);
console.log(test);
