// Lecture One of DSA by Sheryians

// Difference between var and let

// var is function scoped, let is block scoped

// console.log(a);
// var a;
// We can initialzed the var after the console while in case of let we can not do that,
//  We will face the initialization error

// let a = 10;
// let b = 20;

// console.log("The sum of a and b is" + a + b); // like this, it is a concatination case
// // But if we:
// console.log("The sum of a and b is" + (a + b)); // It will be simple addition

// Now the concept called the type coercion
// Type coercion is the process of changing the data type of a variable from one data type to another
// For example, we can change the number to string, string to number, etc.
// But we can not change the boolean to number or vice versa, because boolean is a primitive data

// console.log("1" + 1); // Concate case
// console.log("1" - 1); // 0 ans : Bcz when we execute diff. arith operator js automatically executes according the the math
// console.log("1" / 1); // 1 ans : Same case
// console.log("1" * 1); // 1 ans

// let age = prompt("Enter your age:");
// console.log(age); // The data type of the prompt is string

// We can convert this into number by simply using method and then wrap the prompt in it Number()
// OR age = Number(). These both methods will convert the string into number if the value is capable of being convert
// into number. If there is value which is not number by nature and you convert it in number then it will be shown
// as a NaN
// e.g: Number("ali") => NaN
// Converting one datatype into antoher is called : Typel conversion OR Type casting

// Now, Swap two variables with three methods

//   1st method
let one = 10;
let two = 20;
let three;

// three = one; // three = 10, one = 10
// one = two; // one = 20, two = 20
// two = three; // two = 10, three = 10

// 2nd method

one = one + two; // one = 30
two = one - two; // two = 10
one = one - two; // one = 20

// console.log(one, two);

// 3rd method

// [one, two] = [two, one]; // Array destrucutring assignment
// Left side already existing array of values, Right side a new array with the swapped values without the use of third variable.



// In the arithmetic operator we learnt about the mod and the divide concepts


// Now, we will move towards the relatrional operators. We get the boolean values in the relational operators
// <, >, !=, >=, <==, =, ==, ===
// Also includes the strict case checkings.



// let a = 15 // Assignment operator


// if (a == 12) { // "==" is used in a conditional statement here and "==" is used as a check
//     console.log("A is equal to 12");
// }
// There is a much stronger approach to check the statement and that is "==="=> Most strict type of check,
// Even check the datatype of the values.


// Now, Logical Operators. Used while checking the multiple statements
// && , || => AND and OR operators
// && returns true when both the values are true.
// || returns true when either one of the condition is true.

    // console.log(10> 6 && 5< 12); // True
    // console.log(10> 6 && 5> 12); // False
    // console.log(10> 6 || 5> 12); // True
    // console.log(10< 6 || 5> 12); // false



// Unary Operators
// "++", "--"
// There are two type of notations in it: Post fix and Pre fix 
// Nested loop to print numbers 1-5 and their reverse
// for (let i = 1; i <= 5; i++) {
//     console.log("Forward:", i);
//     for (let j = 5; j >= 1; j--) {
//         console.log("  Reverse:", j);
//     }
// }
// Simple DSA example using unary operators - Finding maximum element
// function findMax(arr) {
//     let max = arr[0];
//     let i = 0;
    
//     while (++i < arr.length) { // Pre-increment
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }


let a = 11; 
let b = 22;

let c = a + b + a++ + b++ + ++a + ++b;

// console.log("a =", a);
// console.log("b =", b);
// console.log("c =", c);


let d = true

d++;
// console.log(d);

// We can not use the unary operator on the boolean value.
// We can only use it on the numeric values. 


// Math Functions:

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.trunc(4.9));
// console.log(Math.random());
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(64));
// console.log(Math.abs(-4.6));
// console.log(Math.max(23, 55, 78, 99, 100));
// console.log(Math.min(23, 55, 78, 99, 100));
// console.log(Math.PI);
// console.log(Math.cbrt(27));
// console.log(Math.hypot(3, 4));
// console.log(Math.trunc((Math.random()*9000) + 1000));

// let num = 123.456;
// console.log(num.toFixed(2)); // It will return the string value of the number

// Find the Are and the perimeter of the rectangle

let length = 10;
let width = 20;

// Check if the triangle is valid using the triangle inequality theorem
// For a triangle to be valid, the sum of any two sides must be greater than the third side

if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)) {
    console.log("The triangle is valid.");
} else {
    console.log("The triangle is not valid. The sum of any two sides must be greater than the third side.");
    console.log("side1 + side2 = " + (side1 + side2) + " should be > " + side3);
    console.log("side2 + side3 = " + (side2 + side3) + " should be > " + side1);
    console.log("side1 + side3 = " + (side1 + side3) + " should be > " + side2);
}


let area = length * width;
console.log("The area of the rectangle is " + area);

let perimeter = 2 * (length + width);
console.log("The perimeter of the rectangle is " + perimeter);

// Calculate area of triangle using Heron's formula
let side1 = 5;
let side2 = 6; 
let side3 = 7;

// Calculate semi-perimeter
let s = (side1 + side2 + side3) / 2;

// Calculate area using Heron's formula
let triangleArea = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log("The area of the triangle is " + triangleArea);

// Find the circumference of the circle
let r = 10;
console.log(2*Math.PI*r);








