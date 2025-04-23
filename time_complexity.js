// Problem: Analyze the time complexity of finding a number in a sorted array
// using binary search vs linear search

// Linear Search - O(n) time complexity
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Binary Search - O(log n) time complexity 
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Example usage and comparison
let sortedArray = [];
for (let i = 0; i < 1000000; i++) {
    sortedArray.push(i);
}

let target = 999999; // Search for last element

console.log("\nComparing search algorithms:");

// Time linear search
let startLinear = Date.now();
let linearResult = linearSearch(sortedArray, target);
let endLinear = Date.now();
console.log(`Linear Search took ${endLinear - startLinear}ms`);

// Time binary search
let startBinary = Date.now();
let binaryResult = binarySearch(sortedArray, target);
let endBinary = Date.now();
console.log(`Binary Search took ${endBinary - startBinary}ms`);

/* 
Time Complexity Analysis:
1. Linear Search: O(n)
   - Must check each element one by one
   - Time increases linearly with array size
   
2. Binary Search: O(log n)
   - Divides search space in half each time
   - Much faster for large sorted arrays
   - Requires sorted array as prerequisite
*/
