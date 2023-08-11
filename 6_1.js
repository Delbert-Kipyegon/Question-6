/**
 * Question 6-1:
 * Write a function that will take input from the user and check if it is palindrome, 
 * if the word is not palindrome then return it n the reverse order. 
 * For example "hello" is not a palindrome, it should return "olleh“
 */

function palindrome(str) {
    // 1. split the string into an array of characters
    // 2. reverse the array
    // 3. join the array back into a string
    let reverseStr = str.split("").reverse().join(""); 
        
    // 4. compare the reversed string with the original string
    // 5. if they are the same, return the original string
    // 6. if they are different, return the reversed string
    if (reverseStr === str) {
        return str;
    } else {
        return reverseStr;
    }
}

// test cases
let result_true = palindrome("level");
let result_false = palindrome("apache");

// print results
console.log(`Case 1: If it is a palindrome, level = ${result_true}`);
console.log(`Case 2: If it is not a palindrome, apache = ${result_false}`);