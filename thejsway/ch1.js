import { cl, title, bigTitle, prompt } from "./util.js";
bigTitle("Chapter 1: 3, 2, 1... Code");

{
  title("Presentation");
  // Write a program that displays your name and age. Here’s the result for mine.
  // Put your code here ↓

  let name = "Nathan Boquiren";
  let age = "16";

  cl("My name is: " + name);
  cl("My age is: " + age);

  // Put your code here ↑
}

{
  title("Minimalistic calculator");
  // Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
  // Always put your code INSIDE the curly braces

  let add = function (num1, num2) {
    return num1 + " + " + num2 + " = " + (num1 + num2);
  };

  let subtract = function (num1, num2) {
    return num1 + " - " + num2 + " = " + (num1 - num2);
  };

  let multiply = function (num1, num2) {
    return num1 + " × " + num2 + " = " + num1 * num2;
  };

  let divide = function (num1, num2) {
    return num1 + " ÷ " + num2 + " = " + num1 / num2;
  };

  cl(add(6, 3));

  cl(subtract(6, 3));

  cl(multiply(6, 3));

  cl(divide(6, 3));
}

{
  title("Values prediction");
  // Observe the following program and try to predict the values it displays.
}
