// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.


function calculateDifference(argument1, argument2) {
  return argument1 - argument2;
}

// Example:
console.log(calculateDifference(50, 40));

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(numbers) {
  if (numbers % 2 === 0) {
    return false;
  }
  else {
    return true;
  }
}

// Example:
console.log(isOdd(21))

function isOdd1(numbers) {
  return numbers % 2 !== 0;
}

// Example:
console.log(isOdd1(21));

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(numbers) {

  if (numbers.length !== 0) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }
    return min;
  }
  else {
    return "Array is empty";
  }
}

// Example:
let num1 = [142, 544, 243, 229, 27];
console.log(findMin(num1));


// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.


function filterEvenNumbers(numbers) {
  if (numbers.length !== 0) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
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

function sortArrayDescending(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (numbers[j] < numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
}

// Example
console.log(sortArrayDescending(num2));


// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
  // Check if the string is empty or not a string
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
console.log(countVowels("Hello World"));

//8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(numbers) {
  if (numbers.length !== 0) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  else {
    return 0;
  }
}

console.log(findAverage(num2));


