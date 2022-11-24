"use strict";
let john = {
        name: "John",
        surname: "Smith",
        id: 1,
    },
    pete = {
        name: "Pete",
        surname: "Hunt",
        id: 2,
    },
    mary = {
        name: "Mary",
        surname: "Key",
        id: 3,
    };

let users = [john, pete, mary];
function usersMapped(arr) {
    return arr.map((element) => {
        const tempObj = {
            fullName: element.name + " " + element.surname,
            id: element.id
        };
        return tempObj;
    });
}
console.log(usersMapped(users));
