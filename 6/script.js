"use strict";
let john = {
        name: "John",
        age: 25,
    },
    pete = {
        name: "Pete",
        age: 30,
    },
    mary = {
        name: "Mary",

        age: 29,
    };

let users = [john, pete, mary];
console.log(users);
function getAverageAge(arr) {
    return (arr.reduce((element, state) =>  element + state.age, 0) / arr.length);
}
console.log(getAverageAge(users));
