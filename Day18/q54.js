// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function createObject(key, value) {
    var obj = {};
    obj[key] = value;
    return obj;
}
var font = createObject("font", "calibri");
console.log(font);
