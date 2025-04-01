// We will learn about the strings regarding the DSA.


// Strings area sequence/ combination/ order of character.
// They act as a array because the characters in a string can be accessed by the index, but the string is not array.
// It is immutable unlike array.
// We can re-assign the data, we can add something in our pre-existing string.

// Here are some common methods used with strings in JavaScript:

// 1. length - Returns the length of the string.
let exampleString = "Hello, World!";
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
