alert("assignment2 has been loaded");

// create a function that will return the object of "rectangle"
// this function will have 3 parameters "name", "a", "b"
// a and b are length of rectangle sides
// create 2 rectangles of custom size by calling the function you have
// created
// create a new function that will accept a rectangle as parameter and then
// do the following:
//    1. compute area of the rectangle,
//    2. compute circumference of the rectangle,
//    3. console.log out text "Area of rectangle < your rectangle name > is <15>"
//    4. console.log out text "Circumference of rectangle < your rectangle name > is <15>"

function createObjectRectangle(name, a, b) {
  return {
    name,
    a,
    b
  }
}

const rectangle1 = createObjectRectangle("Rectangle 1", 10, 5)
const rectangle2 = createObjectRectangle("Rectangle 2", 3, 5)
console.log(rectangle1);
console.log(rectangle2);
console.log(rectangle1.name)

function computeAreaAndCircumference(rectangle) {
  // calculer aire du rectangle: a * b
  const area = rectangle.a * rectangle.b
  // calculer la circonférence du rectangle: C = 2(a + b)
  const circumference = 2 * (rectangle.a + rectangle.b)
  console.log(`Area of rectangle ${rectangle.name} is ${area}`)
  console.log(`Circumference of rectangle ${rectangle.name} is ${circumference}`)
}

computeAreaAndCircumference(rectangle1);
computeAreaAndCircumference(rectangle2);


function increaseProductPrice(product, percentage) {
  return product.price + ((product.price * percentage) / 100)
}

const product = {
  name: "Table",
  price: 100
};

// value should be 200
const increasedPrice = increaseProductPrice(product, 10);
console.log(increasedPrice);

// value should be 450
const increasedPrice2 = increaseProductPrice(product, 50);
console.log(increasedPrice2);
