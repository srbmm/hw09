"use strict";
const userInp = prompt('Enter a group of num and seprate them with ",".').split(",");
function magTest(array) {
    let res = true;
    for (let i = 0; i < parseInt(array.length/2); i++) {
        if (!(array[i] == array.at([-1 * (i + 1)]))) {
            res = false;
            break
        }
    }
    return res
}
console.log(magTest(userInp));
