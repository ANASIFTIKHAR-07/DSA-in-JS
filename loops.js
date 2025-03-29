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
        if (n > 0) {   // We use a nested loop startegy here for every number while loop is working and for that number the for loop is calculating the fatorial. 
            let sum = 0;
            let copyN = n
            while (n > 0) {
                let fact = 1;
                let rem = n % 10
                for (let i = 1; i <= rem; i++) {
                    fact = fact * i
                }
                sum = sum + fact
                n = Math.floor(n / 10)
            }


            if (copyN === sum) {
                console.log(`Your given number ${sum} is a Strong Number`);

            } else {
                console.log(`Your given number ${copyN} is not a Strong number`);
                console.log(copyN);

            }
        }
        else {
            console.log("The given number should be greater than zero and also non-negative!");

        }
    }
}

// Now, comes the Do-while loop
// A do-while loop is a control flow statement that executes a block of code at least once and then repeatedly executes the block as long as a specified condition evaluates to true. 
// This ensures that the code within the loop runs before the condition is tested, allowing for scenarios where the loop must execute at least one time regardless of the condition.


// do{
//     code 
// }while(condition)

// The Do-while loop is a exit control function, meaning it asks for the condition in the last.
// Unlikely to the previuos 2 loops which are entry control loops, Meaning they ask for the condition in the starting


let random = Math.floor(Math.random()*100) + 1 


let guess = -1;

while(guess !== random) {
        guess = Number(prompt("Guess the Number"));
        if (guess<0 || isNaN(guess) || guess> 100) {
            console.log("The number is invalid! Please Try again with a valid number!");
            continue
        }
        if(guess > random){
            console.log(`Your guess of ${guess} is higher than the random number. Try a lower number!`);
        }else if(guess < random){
            console.log(`Your guess of ${guess} is lower than the random number. Try a higher number!`);
        } else{
            console.log(`Congratulations! 🎉 You've guessed the correct number: ${random}`);
        }
}


// It is a more advance approach of doing the same question, and i like this one a lot because it add a max attempt factor for more challenge.
let advancedRandom = Math.floor(Math.random() * 100) + 1;
let advancedGuess = -1;
let attempts = 0;
const maxAttempts = 10;

console.log("Welcome to the Advanced Guessing Game!");
console.log(`You have ${maxAttempts} attempts to guess the number between 1 and 100.`);

do {
    advancedGuess = Number(prompt("Enter your guess:"));
    attempts++;

    if (advancedGuess < 1 || isNaN(advancedGuess) || advancedGuess > 100) {
        console.log("Invalid input! Please enter a number between 1 and 100.");
        attempts--; // Do not count invalid attempts
        continue;
    }

    if (advancedGuess > advancedRandom) {
        console.log(`Your guess of ${advancedGuess} is too high. Try again!`);
    } else if (advancedGuess < advancedRandom) {
        console.log(`Your guess of ${advancedGuess} is too low. Try again!`);
    } else {
        console.log(`Congratulations! 🎉 You've guessed the correct number: ${advancedRandom} in ${attempts} attempts!`);
        break;
    }

    if (attempts === maxAttempts) {
        console.log(`Sorry! You've used all your attempts. The correct number was ${advancedRandom}.`);
    }
} while (attempts < maxAttempts);


// A simple calculator using the do while loop.

let num1, num2, operation, result;

console.log("Welcome to the Calculator!");
do {
    num1 = Number(prompt("Enter the first number:"));
    num2 = Number(prompt("Enter the second number:"));
    operation = prompt("Enter the operation (+, -, *, /) or 'exit' to quit:");

    if (operation === '+') {
        result = num1 + num2;
        console.log(`Result: ${num1} + ${num2} = ${result}`);
    } else if (operation === '-') {
        result = num1 - num2;
        console.log(`Result: ${num1} - ${num2} = ${result}`);
    } else if (operation === '*') {
        result = num1 * num2;
        console.log(`Result: ${num1} * ${num2} = ${result}`);
    } else if (operation === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(`Result: ${num1} / ${num2} = ${result}`);
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
    } else if (operation !== 'exit') {
        console.log("Invalid operation! Please try again.");
    }

} while (operation !== 'exit');

console.log("Thank you for using the calculator!");
