let cl = console.log;


// Xmas Tree

// let height = 20;

// cl(
//     "Here is my Christmas Tree!"
// );

// for (let i = 1; i <= height; i++) {

//   let spaces = " ".repeat(height - i);

//   let branches = "#".repeat(i * 2 - 1);

//   cl(spaces + branches);
// }

// let stump = " ".repeat(height - 1);

// cl(stump + "##");



// Fizzbuzz Program

// cl(
//     "Here is my FizzBuzz Program!"
// );

// for (let i = 1; i <= 100; i++) {

//     if (i % 15 === 0) {
//       cl("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//       cl("Fizz");
//     }
//     else if (i % 5 === 0) {
//       cl("Buzz");
//     }
//     else {
//       cl(i);
//     }
// }


// MATH FUNCTIONS


let add = function(num1, num2) {
  return num1 + " + " + num2 + " = " + (num1 + num2);
};

let subtract = function(num1, num2) {
  return num1 + " - " + num2 + " = " + (num1 - num2);
};

let multiply = function(num1, num2) {
  return num1 + " × " + num2 + " = " +  (num1 * num2);
};

let divide = function(num1, num2) {
  return num1 + " ÷ " + num2 + " = " + (num1 / num2);
};

cl(add(5, 5));

cl(subtract(5, 4));

cl(multiply(5, 5));

cl(divide(5, 5));

let o = {
  name: "Nathan Boquiren",
  age: 16
};

console.table(o)