"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const age = 24;
console.log(`I am ${age} years old.`);
let user = [1, "Alice"];
console.log(`User ID: ${user[0]}, Name: ${user[1]}`);
user[0].toExponential(); // This will work because user[0] is a number
user[1].toUpperCase(); // This will work because user[1] is a string
user.push(1); // This will work because tuples in TypeScript can have additional elements of the specified types
// However, it is recommended to keep tuples at a length of two for better readability and maintainability.
console.log(user); // Output: [1, "Alice", 1]
// ENUMS are a list of related constants that can be either numeric or string values. They are used to define a set of named constants that can be used in a type-safe way.
var Color;
(function (Color) {
    Color[Color["Red"] = 4] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
let MyColor = Color.Red;
console.log(MyColor); // Output: 4
//  By default, the first member of an enum is assigned the value 0, and each subsequent member is assigned a value that is one greater than the previous member. In this example, Red is assigned the value 4, Green is assigned the value 5, and Blue is assigned the value 6.
// Values can be reassigned to different values
console.log(Color.Red); // Output: 0
console.log(Color.Green); // Output: 1
console.log(Color.Blue); // Output: 2
console.log(Color[`4`]); // Output: "Red"
console.log(Color[`5`]); // Output: "Green" 
console.log(Color[`6`]); // Output: "Blue"
//# sourceMappingURL=index.js.map