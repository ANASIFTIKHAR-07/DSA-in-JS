// Lecture One of DSA by Sheryians

// Difference between var and let

// var is function scoped, let is block scoped

// console.log(a);
// var a;
// We can initialzed the var after the console while in case of let we can not do that,
//  We will face the initialization error

let a = 10;
let b = 20;

console.log("The sum of a and b is" + a + b); // like this, it is a concatination case
// But if we:
console.log("The sum of a and b is" + (a + b)); // It will be simple addition

// Now the concept called the type coercion
// Type coercion is the process of changing the data type of a variable from one data type to another
// For example, we can change the number to string, string to number, etc.
// But we can not change the boolean to number or vice versa, because boolean is a primitive data

console.log("1" + 1); // Concate case
console.log("1" - 1); // 0 ans : Bcz when we execute diff. arith operator js automatically executes according the the math
console.log("1" / 1); // 1 ans : Same case
console.log("1" * 1); // 1 ans

let age = prompt("Enter your age:");
console.log(age); // The data type of the prompt is string

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

console.log(one, two);

// 3rd method

[one, two] = [two, one]; // Array destrucutring assignment
// Left side already existing array of values, Right side a new array with the swapped values without the use of third variable.
