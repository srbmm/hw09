"use strict";

//-------------------setInterval--------------------

// function printNumbers(from, to) {
//   const counter = setInterval(() => {
//     if (from <= to) {
//       console.log(from);
//       from++;
//     } else clearInterval(counter);
//   }, 1000);
// }
// printNumbers(7, 15);


//-------------------setTimeout in setTimeout--------------------

function printNumbers(from, to) {
    let timer = setTimeout(function counter() {
        if (from <= to) {
            console.log(from);
            from++;
            timer = setTimeout(counter, 1000);
        }
    }, 1000);
}
printNumbers(7, 15);
