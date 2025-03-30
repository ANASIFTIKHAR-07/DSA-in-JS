// We are starting the Arrays in the DSA learnings. I will learn different types of techinques and methods to solve
// Problems related the DSA.
let fruits = ["Apple", "Banana", "Cherry", "Date"];

// Accessing elements in the array
console.log("First fruit:", fruits[0]); // Output: Apple
console.log("Second fruit:", fruits[1]); // Output: Banana

// Adding an element to the array
fruits.push("Elderberry");
console.log("After adding a fruit:", fruits);

// Removing the last element from the array
let removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);
console.log("After removing a fruit:", fruits);

// Iterating through the array
console.log("List of fruits:");
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}: ${fruit}`);
});
