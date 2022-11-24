"use strict";
function filterInPlace(arr, min, max) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min || arr[i] > max) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
let test = [1,3,5,7,2,9,4];
console.log(test);

filterInPlace(test, 5, 20);
console.log(test);
