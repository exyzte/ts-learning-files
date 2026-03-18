const age: number = 24;
console.log(`I am ${age} years old.`);

let user: [number, string] = [1, "Alice"];
console.log(`User ID: ${user[0]}, Name: ${user[1]}`);

user[0].toExponential(); // This will work because user[0] is a number
user[1].toUpperCase(); // This will work because user[1] is a string

user.push(1); // This will work because tuples in TypeScript can have additional elements of the specified types

// However, it is recommended to keep tuples at a length of two for better readability and maintainability.

console.log(user); // Output: [1, "Alice", 1]

// ENUMS are a list of related constants that can be either numeric or string values. They are used to define a set of named constants that can be used in a type-safe way.

const enum Color {
    Red = 4,
    Green = 5,
    Blue = 6
}

let MyColor: Color = Color.Red;
console.log(MyColor); // Output: 4

//  By default, the first member of an enum is assigned the value 0, and each subsequent member is assigned a value that is one greater than the previous member. In this example, Red is assigned the value 4, Green is assigned the value 5, and Blue is assigned the value 6.
// Values can be reassigned to different values
console.log(Color.Red); // Output: 0
console.log(Color.Green); // Output: 1
console.log(Color.Blue); // Output: 2

// Enums in TypeScript are bi-directional, meaning that you can access the name of an enum member using its value. This is done using the bracket notation with the enum name and the value as the key.

console.log(Color[`4`]); // Output: "Red"
console.log(Color[`5`]); // Output: "Green" 
console.log(Color[`6`]); // Output: "Blue"

function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022) 
        return income * 1.2;
    return income * 1.3;
}

console.log(calculateTax(60_000, 2021)); // Output: 72000

// values can be assigned to arguments when designing functions to designate default values for arguments. This is done using the equals sign (=) followed by the default value in the function signature.
function calculateTaxWithDefault(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022) 
        return income * 1.2;   
    return income * 1.3;
}

console.log(calculateTaxWithDefault(60_000)); // Output: 78000

const employee: {
    readonly id: number;
    name: string;
    role?: string; // The question mark indicates that the role property is optional
} = {
    id: 1,
    name: "Alice",
}

employee.role = "Developer"; // This will work because TypeScript allows adding new properties to objects, but it is not recommended as it can lead to unexpected behavior and make the code harder to maintain.
