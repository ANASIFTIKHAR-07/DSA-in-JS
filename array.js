// We are starting the Arrays in the DSA learnings. I will learn different types of techinques and methods to solve
// Array is a linear data structure storing multiple values in a continuous manner.
// Problems related the DSA.
let fruits = ["Apple", "Banana", "Cherry", "Date"];

// Accessing elements in the array
// console.log("First fruit:", fruits[0]); // Output: Apple
// console.log("Second fruit:", fruits[1]); // Output: Banana

// Adding an element to the array
fruits.push("Elderberry");
// console.log("After adding a fruit:", fruits);

// Removing the last element from the array
let removedFruit = fruits.pop();
// console.log("Removed fruit:", removedFruit);
// console.log("After removing a fruit:", fruits);

// Iterating through the array
console.log("List of fruits:");
fruits.forEach((fruit, index) => {
    // console.log(`${index + 1}: ${fruit}`);
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


// let userArray = new Array(5); // Create an array of length 5

// for (let i = 0; i < userArray.length; i++) {
//     userArray[i] = prompt(`Enter value for index ${i}:`); // Take values using prompt
// }

// console.log("User input array:", userArray); // Display the array


// let arr = [10, 20, 30, 40, 50];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }

// console.log(sum); // ANS: 150, In this case we will get the sum of all the values present in arrays

// Finding the maximum value in the array


// let arr2 = [100, 26, 250, 249, 150]

// let max = arr2[0]

// for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }

// console.log(max);

// Finding the Minimum value in the array

// let arr3 = [100, 26, 250, 249, 150]

// let min = arr3[0];

// for (let i = 1; i < arr.length; i++) {
//     if (min < arr[i]) {
//         min = arr[i]
//     }
// }


// Solving the 2nd Max question 

// let arr4 = [100, 26, 250, 249, 150, 56, 350, 69]


// let max1 = Math.max(arr4[0], arr4[1])
// let max2 = Math.min(arr4[0], arr4[1])

// for (let i = 2; i < arr4.length; i++) {
//     if (arr4[i] > max1) {
//         max2 = max1;
//         max1 = arr4[i]
//     } else if (arr4[i] > max2 && max1 != arr4[i]) {
//         max2 = arr4[i]
//     }
// }

// console.log("The first maximum value is: " + max1);
// console.log("The second maximum value is: " + max2);

// Now, we will found out the 2nd minimum value in the array

// let arr = [100, 26, 250, 249, 150, 56, 350, 69]

// let min1 = Math.min(arr[0], arr[1]);
// let min2 = Math.max(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] < min1) {
//         min2 = min1;
//         min1 = arr[i];
//     } else if (arr[i] < min2 && arr[i] !== min1) {
//         min2 = arr[i];
//     }
// }

// console.log("The first minimum value is: " + min1);
// console.log("The second minimum value is: " + min2);

// Re-Arranging the elements using extra space and also not using the extra space
// let meraArray = [10, 20, 30, 40, 50]

// let temp = new Array(5)

// let j= 0;

// for(let i = meraArray.length-1; i>= 0; i--){
//         temp[j]= meraArray[i];
//         j++
//         // This is a technique using a extra space, But it is not a good technique
// }


let arr = [10, 20, 30, 40, 50]

let i =0
let j = arr.length-1

while(i != j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
}
console.log(arr);




    


