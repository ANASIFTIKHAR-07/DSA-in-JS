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


let promp = prompt("Enter your number: ")

if (promp === null) {
    console.log("Prompt cancelled!!");
}
else {
    let fc = Number(promp)

    if (isNaN(fc)) {
        console.log("The given number is invalid");
    }
    else {
        if (fc > 0) {
            let fact = 1 // The reason why we defined the zero is that in factorial we have to multiply the number with the next one unlike the sum
            for (let i = 1; i <= fc; i++) {
                fact = fact * i;
            }
            console.log("The Factorial of N number :", fact);
        }
        else{
            console.log("The given number should be greater than zero and also non-negative!");
            
        }

    } 
}

