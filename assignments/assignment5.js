alert('Assignment5 is loaded')

// 1. Create a class called "square"
//    create a constructor with 1 parameter which will
//    - represent length of side of the square
//    - create a member function called "computeArea" (method)
//    that will compute the area of the square,
//    return the area of the square from the function

// 2. Create a class called "Rectangle" that will extend the square
//    - create a constructor with 2 parameters which will
//    represent length of sides of the rectangle
//    create a member function called "computeArea" (method)
//    that will compute area of the rectangle,
//    return the area of rectangle from the function

// 3. Create an instance of square

// 4. create an instance of rectangle

// 5. compute area for both and verify if the results are correct

// After everything works
// 6. think of the best way how to improve your code with inheritance
//    as much reusable as possible and not much repetition
// Tip: code first working solution and then think how to improve it.

class Square {
  // length, width = length
  constructor(length) {
    this.length = length;
    this.width = length;
  }

  computeArea() {
    return this.length * this.width;
  }
}
class Rectangle extends Square {
  constructor(length, width) {
    // super(length, width)
    super(length);
    this.width = width;
  }
}
const square = new Square(10);
const rectangle = new Rectangle(10, 5);

const squareArea = square.computeArea();
const rectangleArea = rectangle.computeArea();

console.log(`Area of square is: ${squareArea}`);
console.log(`Area of rectangle is: ${rectangleArea}`);

