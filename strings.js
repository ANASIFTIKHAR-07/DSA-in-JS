// We will learn about the strings regarding the DSA.


// Strings area sequence/ combination/ order of character.
// They act as a array because the characters in a string can be accessed by the index, but the string is not array.
// It is immutable unlike array.
// We can re-assign the data, we can add something in our pre-existing string.

// Here are some common methods used with strings in JavaScript:

// 1. length - Returns the length of the string.
let exampleString = "Hello, World!";
// Length is specifically a property of string
console.log("Length of the string:", exampleString.length); // Output: 13

// 2. charAt() - Returns the character at a specified index.
console.log("Character at index 0:", exampleString.charAt(0)); // Output: H

// 3. indexOf() - Returns the index of the first occurrence of a specified value.
console.log("Index of 'o':", exampleString.indexOf('o')); // Output: 4

// 4. slice() - Extracts a section of a string and returns it as a new string.
console.log("Slice from index 0 to 5:", exampleString.slice(0, 5)); // Output: Hello

// 5. toUpperCase() - Converts the string to uppercase letters.
console.log("Uppercase:", exampleString.toUpperCase()); // Output: HELLO, WORLD!

// 6. toLowerCase() - Converts the string to lowercase letters.
console.log("Lowercase:", exampleString.toLowerCase()); // Output: hello, world!

// 7. trim() - Removes whitespace from both ends of a string.
let spacedString = "   Hello, World!   ";
console.log("Trimmed string:", spacedString.trim()); // Output: Hello, World!

// 8. split() - Splits a string into an array of substrings.
console.log("Split string by space:", exampleString.split(' ')); // Output: ["Hello,", "World!"]

// 9. replace() - Replaces a specified value with another value in a string.
console.log("Replace 'World' with 'JavaScript':", exampleString.replace('World', 'JavaScript')); // Output: Hello, JavaScript!

// 10. includes() - Checks if a string contains a specified value.
console.log("Does the string include 'Hello'? :", exampleString.includes('Hello')); // Output: true

// 11. substring() - Returns a subset of a string between two specified indices.
console.log("Substring from index 0 to 5:", exampleString.substring(0, 5)); // Output: Hello

// 12. substr() - Returns a portion of the string, starting at the specified index and extending for a given number of characters.
console.log("Substr from index 7, length 5:", exampleString.substr(7, 5)); // Output: World

// 13. concat() - Combines two or more strings and returns a new string.
let additionalString = " How are you?";
console.log("Concatenated string:", exampleString.concat(additionalString)); // Output: Hello, World! How are you?

// 14. startsWith() - Checks if a string starts with a specified value.
console.log("Does the string start with 'Hello'? :", exampleString.startsWith('Hello')); // Output: true

// 15. endsWith() - Checks if a string ends with a specified value.
console.log("Does the string end with '!'? :", exampleString.endsWith('!')); // Output: true

// 16. repeat() - Returns a new string with a specified number of copies of the original string.
console.log("Repeat the string 3 times:", exampleString.repeat(3)); // Output: Hello, World!Hello, World!Hello, World!



// Execution No 1:

// let newString = "Hello, World!";

// // 1. Print each character on a new line
// for (let char of newString) {
//     console.log(char);
// }

// // 2. Print in reverse order
// let reversedString = newString.split('').reverse().join(''); // But this is not a DSA based solution
// console.log("Reversed string:", reversedString); // Output: !dlroW ,olleH

// // Another method:

// let rev = ""

// for(let i = newString.length-1; i>= 0; i--){
//         rev = rev + newString.charAt(i)
// }  

// if (rev === newString) { // Palindrome checker
//     console.log("The following word is a palindrome");
// } else{
//     console.log("No palindrome");
    
// }

// console.log(rev); // Works exactly the same like the before one.


// Execution No 2:

// This is method is DSA perspective based and also more efficient than the previous one, Covering the extra space
// let str = prompt("Enter your string: ")


// let i = 0 ,  j = str.length-1

// let isPallindrome = true

// while(i != j){
//     if(str.charAt(i) != str.charAt(j)){
//             isPallindrome = false
//             break;
//     }

//     i++ 
//     j--
// }

// if(isPallindrome) console.log("The string is Pallindrome");
// else console.log("The string is not pallindrome");


// Toggle the characters of the string
// UPPER-CASE -> lower-case
// lower-case -> UPPER-CASE 

// let s = prompt("Enter the String")

// let toggle = ""

// for(let i = 0; i<= s.length-1; i++){
//     let ch = s.charCodeAt(i)

//         if(ch >= 65 && ch <= 90){
//                 toggle = toggle + String.fromCharCode(ch + 32)
//         } else if(ch >= 97 && ch <= 122) {
//             toggle = toggle + String.fromCharCode(ch - 32)
//         }
// }
// console.log(toggle);

// First approach using an object to store character frequencies
let frequency = {}; // Initialize an empty object to store character frequencies.

for (let char of s) { // Loop through each character in the string 's'.
    if (frequency[char]) { // Check if the character already exists in the frequency object.
        frequency[char]++; // If it exists, increment its count by 1.
    } else {
        frequency[char] = 1; // If it doesn't exist, initialize its count to 1.
    }
}

console.log("Character frequency (using object):", frequency); // Output the frequency object to the console.

// Second approach using an array for character frequency (DSA perspective)
let freqArray = new Array(256).fill(0); // Create an array of size 256 (for ASCII characters) and initialize all counts to 0.

for (let char of s) { // Loop through each character in the string 's'.
    freqArray[char.charCodeAt(0)]++; // Increment the count at the index corresponding to the character's ASCII value.
}

console.log("Character frequency (using array):"); // Output the frequency using the array method.
for (let i = 0; i < freqArray.length; i++) { // Loop through the frequency array.
    if (freqArray[i] > 0) { // Check if the count is greater than 0.
        console.log(String.fromCharCode(i) + ": " + freqArray[i]); // Output the character and its frequency.
    }
}


// Advanced Array problems:


let arr = [1,2,3,4,5]

let copy = arr[0]

for(let i = 0; i< arr.length-1; i++){
    arr[i] = arr[i+1]
}

arr[arr.length-1] = copy

console.log(arr);


// This is the reversing of the previous question
let leftArr = [1,2,3,4,5]

let newCopy = arr[arr.length-1]

for(let i = arr.length-1; i>0; i--){
    arr[i] = arr[i-1]
}
arr[0] = newCopy

console.log(leftArr);



// Another method:

let arr1 = [1, 2, 3, 4, 5]

let shiftedArr = arr.splice(1)
shiftedArr.push(arr[0])

console.log(shiftedArr);

let arrToRotate = [1, 2, 3, 4, 5];
let k = 2; // Number of positions to rotate
const n = arrToRotate.length;
k = k % n; // Handle cases where k is greater than the array length
if (k < 0) k += n; // Handle negative rotations

// Using nested loops to perform the rotation
for (let i = 0; i < k; i++) {
    let temp = arrToRotate[n - 1]; // Store the last element
    for (let j = n - 1; j > 0; j--) {
        arrToRotate[j] = arrToRotate[j - 1]; // Shift elements to the right
    }
    arrToRotate[0] = temp; // Place the last element at the front
}

console.log("Array after rotation:", arrToRotate); // Output: [4, 5, 1, 2, 3]
let sortedArray = [1, 1, 2, 2, 3, 4, 4, 5]; // Example sorted array
let uniqueArray = [];

// Loop through the sorted array
for (let i = 0; i < sortedArray.length; i++) {
    // Check if the current element is not the same as the last added element
    if (i === 0 || sortedArray[i] !== sortedArray[i - 1]) {
        uniqueArray.push(sortedArray[i]); // Add unique element to the new array
    }
}

console.log("Array after removing duplicates:", uniqueArray); // Output the unique array


// Another question

// Using nesteed looping, These kind of questions are good practice for doing the repeatitive tasks especially using the nested loops

for(let i = 1; i<=4; i++){
    console.log(j + "execution");
    for(let j = 1; j<=3; j++){
        console.log("Hello");
        
    }
}


// Sorting an array using the bubble sort algorithm
let unsortedArray = [5, 3, 8, 4, 2];
let len = unsortedArray.length;

// Bubble sort algorithm
for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
        if (unsortedArray[j] > unsortedArray[j + 1]) {
            // Swap the elements
            let temp = unsortedArray[j];
            unsortedArray[j] = unsortedArray[j + 1];
            unsortedArray[j + 1] = temp;
        }
    }
}

console.log("Sorted array using bubble sort:", unsortedArray); // Output the sorted array


// Function to sort an array in descending order using selection sort
function selectionSortDescending(arr) {
    let n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the maximum element in the unsorted part of the array
        let maxIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j; // Update maxIndex if a larger element is found
            }
        }
        // Swap the found maximum element with the first element of the unsorted part
        if (maxIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    return arr;
}

let arrayToSort = [12, 5, 8, 20, 3, 15]; // Example array
let sortedDescendingArray = selectionSortDescending(arrayToSort); // Sort the array in descending order

console.log("Array sorted from highest to lowest:", sortedDescendingArray); // Output the sorted array


// Function to sort an array in ascending order using selection sort
function selectionSortAscending(arr) {
    let n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted part of the array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }
        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

let arrayToSortAsc = [12, 5, 8, 20, 3, 15]; // Example array
let sortedAscendingArray = selectionSortAscending(arrayToSortAsc); // Sort the array in ascending order

console.log("Array sorted from lowest to highest:", sortedAscendingArray); // Output the sorted array
function duplicateArray(arr) {
    let duplicatedArray = new Array(arr.length); // Create a new array with the same length
    for (let i = 0; i < arr.length; i++) {
        duplicatedArray[i] = arr[i]; // Copy each element to the new array
    }
    return duplicatedArray;
}

let originalArray = [1, 2, 3, 4, 5]; // Example array
let newArray = duplicateArray(originalArray); // Duplicate the array

console.log("Original Array:", originalArray); // Output the original array
console.log("Duplicated Array:", newArray); // Output the duplicated array


// Left rotation by k Element

let arr = [1, 2, 3, 4, 5]
let temp = new Array(arr.length)
let promp  = prompt("Enter The value of K:  ")

promp = promp % arr.length

for( let i = 0; i< arr.length; i++){
    temp[i] = arr((i+promp) % arr.length)
}
console.log(temp);


// Right rotation by K element
// let arr = [1, 2, 3, 4, 5]
// let temp = new Array(arr.length)
// let promp  = prompt("Enter The value of K:  ")

// promp = promp % arr.length

// for( let i = 0; i< arr.length; i++){
//      arr((i+promp) % arr.length) = temp[i]
// }
// console.log(temp);


function findDuplicates(arr) {
    let duplicates = [];
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            duplicates.push(arr[i]);
        } else {
            seen[arr[i]] = true;
        }
    }
    return duplicates;
}

let arrayWithDuplicates = [1, 2, 3, 4, 5, 2, 3, 6, 7, 1]; // Example array with duplicates
let duplicateElements = findDuplicates(arrayWithDuplicates); // Find duplicates in the array

console.log("Duplicate elements in the array:", duplicateElements); // Output the duplicate elements






