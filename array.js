// We are starting the Arrays in the DSA learnings. I will learn different types of techinques and methods to solve
// Array is a linear data structure storing multiple values in a continuous manner.
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
// We cannot set the length of the array in js. The js has always the capability to stare more values than stated.
// In the DSA, The better approach to assign the values to the indexes is by arr[1] = 100 like this.
// We should assign the values by this method for better undestanding rather than the push method.


// let arr = new Array(3)

// arr.push(100)

// console.log(arr);
// In this case, where we are pushing the 100, the result will be interesting that 100 will be on the 4th index.
// Interesting isn't it? The first three inexes will be empty.


let userArray = new Array(5); // Create an array of length 5

for (let i = 0; i < userArray.length; i++) {
    userArray[i] = prompt(`Enter value for index ${i}:`); // Take values using prompt
}

console.log("User input array:", userArray); // Display the array


let arr = [10, 20, 30, 40, 50];

let sum = 0;

for(let i = 0; i< arr.length; i++){
        sum = sum + arr[i]
}

console.log(sum); // ANS: 150, In this case we will get the sum of all the values present in arrays


