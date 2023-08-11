/**
 * Question 6-2:
 * Let's say we have an array of first 45 numbers with one missing number. 
 * Need to find a missing integer from the list (JavaScript)
 */

// 1. create an array of first 45 numbers
let arr45 = [];

for (let i = 1; i <= 45; i++) {
    arr45.push(i);
}

// 2. remove one number from the array 
//  (I am removing the 27th number)
arr45.splice(26, 1);

// 3. find the missing number
let missingNum = 0;
for (let i = 0; i < arr45.length; i++) {
    if (arr45[i] !== i + 1) {
        missingNum = i + 1;
        break;
    }
}

// 4. print the missing number
console.log(`The missing number is ${missingNum}`);

// 5. print the array
console.log(arr45);


