// We will learn about the loops and the questions related to it.


//  Example of a for loop with increment
// console.log("For loop with increment:");
// for (let i = 0; i <= 5; i++) {
//     console.log("Current value (increment): " + i);
// }

//  Example of a for loop with decrement
// console.log("For loop with decrement:");
// for (let j = 5; j >= 0; j--) {
//     console.log("Current value (decrement): " + j);
// }

// Example of a while loop with increment
// console.log("While loop with increment:");
// let k = 0;
// while (k <= 5) {
//     console.log("Current value (increment): " + k);
//     k++;
// }

//  Example of a while loop with decrement
// console.log("While loop with decrement:");
// let l = 5;
// while (l >= 0) {
//     console.log("Current value (decrement): " + l);
//     l--;
// }

//  Example of a do-while loop with increment
// console.log("Do-while loop with increment:");
// let m = 0;
// do {
//     console.log("Current value (increment): " + m);
//     m++;
// } while (m <= 5);

// Example of a do-while loop with decrement
// console.log("Do-while loop with decrement:");
// let n = 5;
// do {
//     console.log("Current value (decrement): " + n);
//     n--;
// } while (n >= 0);



// sum of n natural numbers


// let pr = prompt("How much you wanna add? :")
// // I did this step because if a prompt is cancelled. It returns a null.

// if (pr === null) {
//     console.log("Prompt cancelled!!");
// }
// else {
//     let ans = Number(pr)

//     if (isNaN(ans)) {
//         console.log("The entered number is not valid");
//     }
//     else {
//         if (ans > 0) {
//             let sum = 0
//             for (i = 1; i <= ans; i++) {
//                 sum = sum + i
//             }
//             console.log("The sum of n natural number is :", sum);
//         }
//         else {
//             console.log("The given natural number should be greater than zero and non-negative");
//         }
//     }
// }


// Find the factorial of n natural numbers


// let promp = prompt("Enter your number: ")

// if (promp === null) {
//     console.log("Prompt cancelled!!");
// }
// else {
//     let fc = Number(promp)

//     if (isNaN(fc)) {
//         console.log("The given number is invalid");
//     }
//     else {
//         if (fc > 0) {
//             let fact = 1 // The reason why we defined the zero is that in factorial we have to multiply the number with the next one unlike the sum
//             for (let i = 1; i <= fc; i++) {
//                 fact = fact * i;
//             }
//             console.log(`The factorial of ${fc} is: ${fact}`);
//         }
//         else{
//             console.log("The given number should be greater than zero and also non-negative!");
            
//         }

//     } 
// }


// Find the factors of n number

// let promp = prompt("Enter your number: ")

// if (promp === null) {
//     console.log("Prompt cancelled!!");
// }
// else {
//     let fac = Number(promp)

//     if (isNaN(fac)) {
//         console.log("The given number is invalid");
//     }
//     else {
//         if (fac > 0) {
//            for (let i = 1; i <= Math.floor(fac/2); i++) {
//                 if (fac%i === 0) {
//                     console.log(i);
//                 }
//            }
//            console.log(fac);
//         }
//         else{
//             console.log("The given number should be greater than zero and also non-negative!");
            
//         }

//     } 
// }


// let promp = prompt("Enter your number: ")

// if (promp === null) {
//     console.log("Prompt cancelled!!");
// }
// else {
//     let priNum = Number(promp)

//     if (isNaN(priNum)) {
//         console.log("The given number is invalid");
//     }
//     else {
//         if (priNum > 0) {
//             console.log(isPrime(priNum));
//             // let isPrime = true;   Alternative method
//             // for (let i = 2; i <= Math.floor(priNum/2); i++) {
//             //     if (priNum%i === 0) {
//             //         isPrime = false;
//             //         break;  
//             //     }       
//             // }
//         }
//         else{
//             console.log("The given number should be greater than zero and also non-negative!");
            
//         }

//     } 
// }


// function isPrime(priNum) {
//         if(priNum<=1) return false;
//         if(priNum==2) return true;
//         if(priNum%2 == 0 ) return false;
//         for(let i = 3; i<= Math.floor(Math.sqrt(priNum)) ; i+=2){
//             if(priNum%i == 0) return false
//         }
//         return true
// }

// The 'break' statement exits the loop immediately, while 'continue' skips the current iteration and proceeds to the next one.
// Both are used to control the flow of loops based on certain conditions.


// Now, time for the while loop,
// In case of for loops"


// for(start ; end ; change) {
// This is the flow of this for loop
// }


// In case of while loops:
// start;
// while(condition){
// code 
// condition
//}

// For Example:
// The while loop is used when the number of iterations is not known beforehand and depends on a condition being met. 
// It is particularly useful in situations where you want to continue executing a block of code until a specific condition changes, 
// such as reading input until a valid response is given, or processing items in a collection until it is empty. 
// In contrast, a traditional for loop is typically used when the number of iterations is known or can be determined before entering the loop.


// let i = 1;
// while(i >= 23) {
//     console.log(i);
//     i++
// }

// let promp = prompt("Enter your number: ")

// if (promp === null) {
//     console.log("Prompt cancelled!!");
// }
// else {
//     let n = Number(promp)

//     if (isNaN(n)) {
//         console.log("The given number is invalid");
//     }
//     else {
//         if (n > 0) {
//             // let sum = 0; Addition of number
//             // while (n>0) {
//             //     let rem = n%10
//             //     sum = sum + rem
//             //     n = Math.floor(n/10)
//             // }
//             // console.log(sum);

//             let rev = 0; // Reverse order of numbers 
//             while (n>0) {
//                 let rem = n%10;
//                 rev = rev*10 + rem;
//                 n = Math.floor(n/10)
//             }
//             console.log(rev);
            
//         }
//         else{
//             console.log("The given number should be greater than zero and also non-negative!");
            
//         }

//     } 
// }


// Now, we will learn how to solve the question of strong numbers: We will use the same boiler code which we are using.

let promp = prompt("Enter your number: ")

if (promp === null) {
    console.log("Prompt cancelled!!");
}
else {
    let n = Number(promp)

    if (isNaN(n)) {
        console.log("The given number is invalid");
    }
    else {
        if (n > 0) {
        let sum = 0;
        while (n>0) {
            let fact= 1;
            let rem = n%10
            for(let i =1 ; i<=rem; i++){
                fact = fact*i
            }
            sum = sum + fact
            n = Math.floor(n/10)
        }
        }
        else{
            console.log("The given number should be greater than zero and also non-negative!");
            
        }

    } 
}