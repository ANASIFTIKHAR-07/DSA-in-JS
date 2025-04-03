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

let s = prompt("Enter the String")

let toggle = ""

for(let i = 0; i<= s.length-1; i++){
    let ch = s.charCodeAt(i)

        if(ch >= 65 && ch <= 90){
                toggle = toggle + String.fromCharCode(ch + 32)
        } else if(ch >= 97 && ch <= 122) {
            toggle = toggle + String.fromCharCode(ch - 32)
        }
}
console.log(toggle);

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






