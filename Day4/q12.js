"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["Uzair", "Mubashir", "Hassan"];
names.forEach(name => {
    console.log("Good Morning " + name);
});
