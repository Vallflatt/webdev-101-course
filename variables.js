// alert("Hello World");
// storing in variables with special keywords: const to store and reuse
// start of program

const sum = 7 + 7; // +, -, *, / operators
let floaty = 7.3 + 8.9;
const message = "Hello World, today is a beautiful day";
const total = sum + floaty;
let welcomeText = "Hello" + " " + "students!"; // concatenation of strings
const welcomeInterpolatedText = `${welcomeText}` // interpolation
let pi = 3.14
const truthValue = true;
const falseValue = false;
console.log(sum);
console.log(floaty);
console.log(message);
console.log(total);
console.log(welcomeText);
console.log(welcomeInterpolatedText);
console.log(pi);
console.log(truthValue);
console.log(falseValue);

// reassign a variable: not possible with a const variable
// let is the keyword to be able to reassign a variable

floaty = 10000;
welcomeText = "Hello Virginie"
pi = pi + 10;
console.log(floaty)
console.log(welcomeText);
console.log(pi);

const firstName = "Virginie";
console.log(firstName);
const a = 10, b = 3, c = 5;
console.log(a); console.log(b); console.log(c);
// semi-colons are mandatory when writing multiple instructions in a single line

// end of program
