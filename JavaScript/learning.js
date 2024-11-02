let cl = console.log;


// Xmas Tree

let height = 7;

cl(
    "Here is my Christmas Tree!"
);

for (let i = 1; i <= height; i++) {

  let spaces = " ".repeat(height - i);

  let branches = "#".repeat(i * 2 - 1);

  cl(spaces + branches);
}

let stump = " ".repeat(height - 1);

cl(stump + "#");



// Fizzbuzz Program

cl(
    "Here is my FizzBuzz Program!"
);

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      cl("FizzBuzz");
    }
    
    else if (i % 3 === 0) {
      cl("Fizz");
    }
    
    else if (i % 5 === 0) {
      cl("Buzz");
    }
    
    else {
      cl(i);
    }
  }
  