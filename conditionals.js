// Voter eligibility checker
// Get the user's age using prompt
// let age = prompt("Please enter your age:");

// Convert the input to a number
// age = Number(age);

// Check if the person is eligible to vote (18 or older)

// if (isNaN(age)) {
//     console.log("Please enter a valid age!");
// }

// else if (age >= 18) {
//     console.log("You are eligible to vote!");
// }

// else if (age < 18) {
//     console.log("Sorry, you are not eligible to vote yet.");
//     console.log("You need to wait " + (18 - age) + " more years to be eligible.");
// }


// Shop discount calculator
// Get the purchase amount using prompt
// These types of questions are called range questions, in which we can follow the same logic to solve these kind of questions 
// let purchaseAmount = prompt("Please enter your purchase amount:");

// Convert the input to a number
// purchaseAmount = Number(purchaseAmount);

// Check if the input is valid
// if (isNaN(purchaseAmount)) {
//     console.log("Please enter a valid purchase amount!");
// }
// else if (purchaseAmount <= 0) {
//     console.log("Purchase amount must be greater than 0!");
// }
// // Check if the Puchase Amount is negative
// else if (purchaseAmount < 0) {
//     console.log("Purchase amount cannot be negative!");
// }
// // Apply different discount rates based on purchase amount ranges
// else if (purchaseAmount > 25000) {
//     let discount = purchaseAmount * 0.30; // 30% discount
//     let finalAmount = purchaseAmount - discount;
//     console.log("Congratulations! You get a 30% discount.");
//     console.log("Discount amount: $" + discount.toFixed(2));
//     console.log("Final amount to pay: $" + finalAmount.toFixed(2));
// }
// else if (purchaseAmount > 15001 && purchaseAmount <= 25000) {
//     let discount = purchaseAmount * 0.25; // 25% discount
//     let finalAmount = purchaseAmount - discount;
//     console.log("Congratulations! You get a 25% discount.");
//     console.log("Discount amount: $" + discount.toFixed(2));
//     console.log("Final amount to pay: $" + finalAmount.toFixed(2));
// }
// else if (purchaseAmount > 10001 && purchaseAmount <= 15000) {
//     let discount = purchaseAmount * 0.20; // 20% discount
//     let finalAmount = purchaseAmount - discount;
//     console.log("Congratulations! You get a 20% discount.");
//     console.log("Discount amount: $" + discount.toFixed(2));
//     console.log("Final amount to pay: $" + finalAmount.toFixed(2));
// }
// else if (purchaseAmount > 5001 && purchaseAmount <= 10000) {
//     let discount = purchaseAmount * 0.15; // 15% discount
//     let finalAmount = purchaseAmount - discount;
//     console.log("Congratulations! You get a 15% discount.");
//     console.log("Discount amount: $" + discount.toFixed(2));
//     console.log("Final amount to pay: $" + finalAmount.toFixed(2));
// }
// else if (purchaseAmount > 0 && purchaseAmount <= 5000) {
//     let discount = purchaseAmount * 0.05; // 5% discount
//     let finalAmount = purchaseAmount - discount;
//     console.log("You get a 5% discount.");
//     console.log("Discount amount: $" + discount.toFixed(2));
//     console.log("Final amount to pay: $" + finalAmount.toFixed(2));
// }




// Bill Calculator

// let unit = prompt("Please enter the number of units consumed:");

// unit = Number(unit);
// let amount = 0;

// if (isNaN(unit)) {
//     console.log("Please enter a valid number of units!");
// }

// else if (unit < 0) {
//     console.log("Number of units cannot be negative!");
// }

// if (unit > 400) {
//     amount = (unit - 400) * 18;
//     unit = 400;
// }
// if (unit> 200 && unit <= 400) {
//     amount += (unit - 200) * 15;
//     unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//     amount += (unit - 100) * 12;
//     unit = 100;
// }
// if (unit <= 100) {
//     amount += unit * 10;
// }

// console.log("Total amount to pay: " + amount.toFixed(2));


// Pakistani Rupee (PKR) Denomination Calculator
let amount = 5001; // Amount in PKR

console.log("Breaking down " + amount + " PKR into denominations:");

if (amount >= 5000) {
    console.log("5000 PKR notes: " + Math.floor(amount / 5000));
    amount %= 5000;
}
if (amount >= 1000) {
    console.log("1000 PKR notes: " + Math.floor(amount / 1000));
    amount %= 1000;
}
if (amount >= 500) {
    console.log("500 PKR notes: " + Math.floor(amount / 500));
    amount %= 500;
}
if (amount >= 100) {
    console.log("100 PKR notes: " + Math.floor(amount / 100));
    amount %= 100;
}
if (amount >= 50) {
    console.log("50 PKR notes: " + Math.floor(amount / 50));
    amount %= 50;
}
if (amount >= 20) {
    console.log("20 PKR notes: " + Math.floor(amount / 20));
    amount %= 20;
}
if (amount >= 10) {
    console.log("10 PKR notes: " + Math.floor(amount / 10));
    amount %= 10;
}
if (amount >= 5) {
    console.log("5 PKR notes: " + Math.floor(amount / 5));
    amount %= 5;
}
if (amount >= 2) {
    console.log("2 PKR coins: " + Math.floor(amount / 2));
    amount %= 2;
}
if (amount === 1) {
    console.log("1 PKR coin: " + amount);
}



// Ternary Operator
// The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, a value if true, and a value if false. 
// Syntax: condition ? valueIfTrue : valueIfFalse
let age = 18;
let canVote = (age >= 18) ? "You can vote." : "You cannot vote.";
console.log(canVote);

// Nested Ternary Operator
// A nested ternary operator is when you use a ternary operator inside another ternary operator. 
// This can be useful for multiple conditions but can reduce readability.
let score = 85;
let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : "F";
console.log("Your grade is: " + grade);

// Switch Case
// A switch case is used when you have multiple conditions based on the value of a single variable. 
// It is often cleaner and more readable than using multiple if-else statements when checking the same variable against different values.
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log("The day is: " + dayName);

// Use if-else when you have complex conditions or when the conditions are not based on a single variable.
// Use switch case when you are checking the same variable against multiple constant values.
console.log("Use if-else for complex conditions and switch case for multiple constant checks.");



// let num = 0.1 + 0.2

// switch (num) {
//     case 0.3:
//         console.log("Hello");

//         break;
//     case 0.4:
//         console.log("Hey");
//         break;


//     default:
//         console.log("AOA");
        
//         break;
// }


// 🚀 Floating-Point Precision Issue in JavaScript
// JavaScript uses IEEE 754 floating-point arithmetic, which causes precision errors
// Example: 0.1 + 0.2 !== 0.3, but rather 0.30000000000000004

// ❌ Original Problem (This will NOT work as expected)
let num = 0.1 + 0.2;

switch (num) {
    case 0.3:  // This case will not run because num is actually 0.30000000000000004
        console.log("Hello");
        break;
    case 0.4:
        console.log("Hey");
        break;
    default:
        console.log("AOA"); // This will run due to floating-point error
        break;
}

// ✅ Solution 1: Using toFixed (Converts to String)
let numFixed = (0.1 + 0.2).toFixed(1); // "0.3" (String)

switch (numFixed) {
    case "0.3":  // Since toFixed returns a string, we compare with "0.3"
        console.log("Hello");
        break;
    case "0.4":
        console.log("Hey");
        break;
    default:
        console.log("AOA");
        break;
}

// ✅ Solution 2: Using Math.round to Ensure Exact Decimal Value
let numRounded = Math.round((0.1 + 0.2) * 10) / 10; // Rounds to 0.3

switch (numRounded) {
    case 0.3:  // Now it correctly matches 0.3
        console.log("Hello");
        break;
    case 0.4:
        console.log("Hey");
        break;
    default:
        console.log("AOA");
        break;
}

// ✅ Solution 3: Using Number.EPSILON for Precise Comparison (Best for If-Else)
let numEpsilon = 0.1 + 0.2;
if (Math.abs(numEpsilon - 0.3) < Number.EPSILON) {
    console.log("Hello");  // Now correctly detects 0.3
} else {
    console.log("AOA");
}

// 🔥 Best Choice?
// ✅ Use `toFixed()` for string-based switch cases
// ✅ Use `Math.round()` for numeric switch cases
// ✅ Use `Number.EPSILON` for best precision in comparisons












