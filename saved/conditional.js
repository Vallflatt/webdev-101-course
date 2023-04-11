// comparison operators > larger than > smaller than <= smaller or equal
// >= bigger or equal == equal
const conditional1 = 100 > 150; // false
const conditional2 = 3 < 10; // true
const conditional3 = 3 === 2; // false
const conditional4 = 3 == "3"; // true because of the 2 ==, type not conserved
const conditional5 = 11 >= 11; // true
const conditional6 = 15 <= 16; // true
const conditional7 = product1.price > product3.price; // false
const conditional8 = products.length < 10; // true
const conditional9 = "Hello there".length < 8; // false
const conditional10 = products[1].name.length > 10; // true
const conditional11 = true > false; // true


// if statment

if (
  (numberList[0] > numberList[1]) ||
  (numberList[numberList.length -1] > numberList[numberList.length -2])
) {
  console.log("yeah yeah")
} else {
  console.log("nooo noooo")
}


if ((product1.price > product2.price) && (product3.price > product4.price)) {
  console.log("yeah")
} else {
  console.log("oh no")
}

if (150 > 160) {
  console.log("150 is larger")
} else {
  console.log("150 is smaller")
}

if (conditional3) {
  console.log("3 === 2")
} else {
  console.log("3 is not equal to 2")
}

const justSomeVariable = false

if (product1.price < product2.price) {
  console.log("product 1 price is bigger than product2 price")
} else if (product2.price > product3.price) {
  console.log("product2 price is bigger than product3 price")
} else if (justSomeVariable) {
  console.log("just some variable")
} else {
  console.log("Nothing true, so we are in else")
}

// as soon as finds a true statement, enters and returns

// logical operators  && and ||

// true on the left AND true on the right (&& both sides need to be true)
if (10 > 5 && 4 < 8) {
  console.log("yay")
} else {
  console.log("no")
}

// true on the left and false on the right: will be false
if (10 > 5 && 4 > 8) {
  console.log("yay")
} else {
  console.log("no")
}

// OR operator: one side needs to be true for the statement to be true

if (10 > 5 || 4 > 8) {
  console.log("yay")
} else {
  console.log("no")
}

// chaining multiple operators

if ((10 < 5 || 4 > 8) || (2 < 3))  {
  console.log("yay")
} else {
  console.log("no")
}
