// Voter eligibility checker
// Get the user's age using prompt
let age = prompt("Please enter your age:");

// Convert the input to a number
age = Number(age);

// Check if the person is eligible to vote (18 or older)

if (isNaN(age)) {
    console.log("Please enter a valid age!");
}

else if (age >= 18) {
    console.log("You are eligible to vote!");
}

else if (age < 18) {
    console.log("Sorry, you are not eligible to vote yet.");
    console.log("You need to wait " + (18 - age) + " more years to be eligible.");
}
 3

// Shop discount calculator
// Get the purchase amount using prompt
let purchaseAmount = prompt("Please enter your purchase amount:");

// Convert the input to a number
purchaseAmount = Number(purchaseAmount);

// Check if the input is valid
if (isNaN(purchaseAmount)) {
    console.log("Please enter a valid purchase amount!");
} 
else if (purchaseAmount <= 0) {
    console.log("Purchase amount must be greater than 0!");
}
// Apply different discount rates based on purchase amount ranges
else if (purchaseAmount > 25000) {
    let discount = purchaseAmount * 0.30; // 30% discount
    let finalAmount = purchaseAmount - discount;
    console.log("Congratulations! You get a 30% discount.");
    console.log("Discount amount: $" + discount.toFixed(2));
    console.log("Final amount to pay: $" + finalAmount.toFixed(2));
}
else if (purchaseAmount > 15001 && purchaseAmount <= 25000) {
    let discount = purchaseAmount * 0.25; // 25% discount
    let finalAmount = purchaseAmount - discount;
    console.log("Congratulations! You get a 25% discount.");
    console.log("Discount amount: $" + discount.toFixed(2));
    console.log("Final amount to pay: $" + finalAmount.toFixed(2));
}
else if (purchaseAmount > 10001 && purchaseAmount <= 15000) {
    let discount = purchaseAmount * 0.20; // 20% discount
    let finalAmount = purchaseAmount - discount;
    console.log("Congratulations! You get a 20% discount.");
    console.log("Discount amount: $" + discount.toFixed(2));
    console.log("Final amount to pay: $" + finalAmount.toFixed(2));
}
else if (purchaseAmount > 5001 && purchaseAmount <= 10000) {
    let discount = purchaseAmount * 0.15; // 15% discount
    let finalAmount = purchaseAmount - discount;
    console.log("Congratulations! You get a 15% discount.");
    console.log("Discount amount: $" + discount.toFixed(2));
    console.log("Final amount to pay: $" + finalAmount.toFixed(2));
}
else if (purchaseAmount > 0 && purchaseAmount <= 5000) {
    let discount = purchaseAmount * 0.05; // 5% discount
    let finalAmount = purchaseAmount - discount;
    console.log("You get a 5% discount.");
    console.log("Discount amount: $" + discount.toFixed(2));
    console.log("Final amount to pay: $" + finalAmount.toFixed(2));
}




