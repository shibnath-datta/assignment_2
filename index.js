// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.


function calculateDifference(argument1, argument2) {
  return argument1 - argument2;
}

// Example:
console.log(calculateDifference(50, 40));

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(argument) {
  if (argument % 2 === 0) {
    return false;
  }
  else {
    return true;
  }
}

// Example:
console.log(isOdd(21))


// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(arr) {

  if (arr.length !== 0) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  else {
    return "Array is empty";
  }
}

// Example:
let num1 = [142, 54, 24, 22, 27];
console.log(findMin(num1));


// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.


function filterEvenNumbers(arr) {
  if (arr.length !== 0) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
    return evenNumbers;
  }
  else {
    return "Array is empty";
  }

}

// Example:
let num2 = [142, 544, 243, 229, 28];
console.log(filterEvenNumbers(num2));

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(arr) {
  /*for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;*/

  let sortedArray = [...arr];

  sortedArray.sort(function (a, b) {
    return b - a;
  });

  return sortedArray;

}

// Example
let num3 = [42, 54, 23, 29, 98];
console.log(sortArrayDescending(num3));


// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
  // Check string is empty or not a string
  if (typeof str !== 'string' || str.length === 0) {
    return "Input is not valid";
  }

  return str.charAt(0).toLowerCase() + str.slice(1);
}

// Example:
console.log(lowercaseFirstLetter("HELLO"));

//7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.


function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// Example:
console.log(countVowels("Count Vowels"));

//8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(arr) {

  // Check array is not empty
  if (arr.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

let num4 = [42, 54, 65, 23, 29, 98];
console.log(findAverage(num4));


