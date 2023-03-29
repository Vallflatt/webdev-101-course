// functions

// keyword: function nameOfFunction

// 1 function declaration
  // code that belongs only to the function
  // accessible only within the function
  // instructions: 2 variables a and b
  // compute area of rectangle
  // console.log the results
  // const a = 10;
  // const b = 5;

// function execution

// you need to call the function to see something in the console, in order to
// execute it
// specify parameters of function a is length, b is width
console.log("starting our app")
// debugger is the special keyword to stop the code execution

function computeRectangleArea(a, b) {
  const area = a * b;
  return area; // added the return
}

// pass the values as arguments in the function you call
const rectangleArea = computeRectangleArea(10, 5);
console.log(rectangleArea)

console.log("finishing our app")

// calling it again with different values

// const x = 5
// const y = 6

// computeRectangleArea(x, y);
// computeRectangleArea(true, false); // true is 1, false is 0, so 1 * 0 = 0
