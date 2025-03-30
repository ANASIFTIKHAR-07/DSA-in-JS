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

// Most used array methods:
// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
// 2. pop() - Removes the last element from an array and returns that element.
// 3. shift() - Removes the first element from an array and returns that element.
// 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
// 5. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// 6. slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// 7. forEach() - Executes a provided function once for each array element.
// 8. map() - Creates a new array with the results of calling a provided function on every element in the calling array.
// 9. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// 10. reduce() - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// The Javascript does have the ability of the dynamic array unlike the C++, Java(which have demands the fixed length of the array).
//  But we can also set the array static.