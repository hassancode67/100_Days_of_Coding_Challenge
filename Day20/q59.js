"use strict";
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
Object.defineProperty(exports, "__esModule", { value: true });
function add(value) {
    return function (num) {
        return num + value;
    };
}
let adding = add(7);
console.log(adding(8));
console.log(adding(6));
