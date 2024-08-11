//!  Function to sum two numbers
// function sumNumbers(num1, num2) {
//     return num1 + num2;
// }
// let result1 = sumNumbers(5, 10);
// console.log("Sum of 5 and 10 is: " + result1); 

// let result2 = sumNumbers(-3, 7);
// console.log("Sum of -3 and 7 is: " + result2); 

// let result3 = sumNumbers(0, 0);
// console.log("Sum of 0 and 0 is: " + result3); 

// let result4 = sumNumbers(12.5, 7.3);
// console.log("Sum of 12.5 and 7.3 is: " + result4);



//! Function to check if a number is even or odd
// function isEvenOrOdd(num) {
//     if (typeof num !== 'number') {
//         return "Invalid input";
//     }

//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// let result1 = isEvenOrOdd(10);
// console.log("10 is: " + result1); 

// let result2 = isEvenOrOdd(7);
// console.log("7 is: " + result2); 

// let result3 = isEvenOrOdd("Hello");
// console.log('"Hello" is: ' + result3); 

// let result4 = isEvenOrOdd(0);
// console.log("0 is: " + result4); 

// let result5 = isEvenOrOdd(-3);
// console.log("-3 is: " + result5);



//! Function to reverse a string
// function reverseString(str) {
//     if (typeof str !== 'string') {
//         return "Invalid input";
//     }
//     let reversedStr = str.split('').reverse().join('');
//     return reversedStr;
// }
// let result1 = reverseString("Hello");
// console.log('Reversed "Hello" is: ' + result1); 

// let result2 = reverseString("JavaScript");
// console.log('Reversed "JavaScript" is: ' + result2); 

// let result3 = reverseString("A");
// console.log('Reversed "A" is: ' + result3); 

// let result4 = reverseString("");
// console.log('Reversed "" is: ' + result4);

// let result5 = reverseString(12345);
// console.log('Reversed 12345 is: ' + result5);


//! Function to calculate the factorial of a non-negative integer
// function calculateFactorial(num) {
//     if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
//         return "Invalid input";
//     }
//     if (num === 0) {
//         return 1;
//     }
//     let factorial = 1;
//     for (let i = num; i > 0; i--) {
//         factorial *= i;
//     }
//     return factorial;
// }
// let result1 = calculateFactorial(5);
// console.log("Factorial of 5 is: " + result1); 

// let result2 = calculateFactorial(0);
// console.log("Factorial of 0 is: " + result2);

// let result3 = calculateFactorial(7);
// console.log("Factorial of 7 is: " + result3); 

// let result4 = calculateFactorial(-3);
// console.log("Factorial of -3 is: " + result4);

// let result5 = calculateFactorial(3.5);
// console.log("Factorial of 3.5 is: " + result5);


//! Function to convert a string to uppercase
// function toUpperCaseString(str) {
//     if (typeof str !== 'string') {
//         return "Invalid input";
//     }
//     return str.toUpperCase();
// }
// let result1 = toUpperCaseString("hello");
// console.log('Uppercase of "hello" is: ' + result1);

// let result2 = toUpperCaseString("JavaScript");
// console.log('Uppercase of "JavaScript" is: ' + result2);

// let result3 = toUpperCaseString("OpenAI");
// console.log('Uppercase of "OpenAI" is: ' + result3);

// let result4 = toUpperCaseString("123abc");
// console.log('Uppercase of "123abc" is: ' + result4);

// let result5 = toUpperCaseString(42);
// console.log('Uppercase of 42 is: ' + result5);



//! Function to return the first n elements of an array
// function getFirstNElements(arr, n) {
//     if (!Array.isArray(arr) || typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
//         return "Invalid input";
//     }
//     if (n >= arr.length) {
//         return arr;
//     }
//     return arr.slice(0, n);
// }
// let array1 = [1, 2, 3, 4, 5];
// let result1 = getFirstNElements(array1, 3);
// console.log('First 3 elements: ' + result1);

// let array2 = ["a", "b", "c", "d", "e"];
// let result2 = getFirstNElements(array2, 7);
// console.log('First 7 elements: ' + result2);

// let array3 = [10, 20, 30];
// let result3 = getFirstNElements(array3, 0);
// console.log('First 0 elements: ' + result3);

// let result4 = getFirstNElements(array3, 2);
// console.log('First 2 elements: ' + result4);

// let result5 = getFirstNElements("not an array", 3);
// console.log('Invalid input test: ' + result5);



//! Higher-order function to apply a given function to a number twice
// function applyTwice(func, num) {
//     let firstApplication = func(num);
//     let secondApplication = func(firstApplication);

//     return secondApplication;
// }
// let result1 = applyTwice(x => x + 3, 5);
// console.log('applyTwice(x => x + 3, 5) returns: ' + result1);

// let result2 = applyTwice(x => x * 2, 4);
// console.log('applyTwice(x => x * 2, 4) returns: ' + result2);

// let result3 = applyTwice(x => x * x, 2);
// console.log('applyTwice(x => x * x, 2) returns: ' + result3);

// let result4 = applyTwice(x => x - 1, 10);
// console.log('applyTwice(x => x - 1, 10) returns: ' + result4); 



//! Function to execute a callback after a specified delay
// function executeAfterDelay(callback, delay) {
//     setTimeout(callback, delay);
// }
// executeAfterDelay(() => {
//     console.log("Executed after 2 seconds");
// }, 2000);

// executeAfterDelay(() => {
//     let sum = 3 + 4;
//     console.log("Sum is: " + sum);
// }, 1000); 

// executeAfterDelay(() => {
//     let str = "JavaScript";
//     let reversedStr = str.split('').reverse().join('');
//     console.log("Reversed string is: " + reversedStr);
// }, 3000);

// executeAfterDelay(() => {
//     let currentTime = new Date().toLocaleTimeString();
//     console.log("Current time is: " + currentTime);
// }, 1500);/



//! Function to filter an array based on a callback function
// function filterArray(arr, callback) {
//     let filteredArr = [];

//     for (let i = 0; i < arr.length; i++) {
       
//         if (callback(arr[i])) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = filterArray(numbers, num => num % 2 === 0);
// console.log('Even numbers: ' + evenNumbers);

// let greaterThanFive = filterArray(numbers, num => num > 5);
// console.log('Numbers greater than 5: ' + greaterThanFive);

// let oddNumbers = filterArray(numbers, num => num % 2 !== 0);
// console.log('Odd numbers: ' + oddNumbers);



//! Function to map array elements based on a callback function
function mapArrayElements(arr, callback) {
    let mappedArr = [];

    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(callback(arr[i]));
    }
    return mappedArr;
}
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = mapArrayElements(numbers, num => num * 2);
console.log('Doubled numbers: ' + doubledNumbers);

let squaredNumbers = mapArrayElements(numbers, num => num * num);
console.log('Squared numbers: ' + squaredNumbers);

let incrementedNumbers = mapArrayElements(numbers, num => num + 1);
console.log('Incremented numbers: ' + incrementedNumbers);

let negatedNumbers = mapArrayElements(numbers, num => -num);
console.log('Negated numbers: ' + negatedNumbers);