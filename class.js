// this is a class responsible for creating instances of products
class Product {

  constructor(
    name = "Default Name", // default data: default parameters
    type = "Default type",
    price,
    currency = "USD",
    image = "unsplash_url"
  ) {
    this.name = name; // assigning variables
    this.type = type;
    this.price = price;
    this.currency = currency;
    this.image = image;
  }
  //method
  displayInfo(params) {
    console.log("Name: ", this.name);
    console.log("Type: ", this.type);
    console.log("Price: ", this.price);
    console.log("Currency: ", this.currency);
    console.log("Image: ", this.image);
  }
}

// inheritance example (instead of copying all that is similar)
class FancyProduct extends Product {
  fancyFunction() {
    console.log("I am a fancy product!!!!");
  }
}

Object.prototype.mySuperOwnFunction = function() {
  console.log(this);
}
// without the "new", this refers to the window. New allows to create a new object

const product1 = new Product("laptop", "electronics", 500, "USD", "some_url_of_image");
const product2 = new Product("Super shoes", "clothing", 50, "USD", "some_url_of_image");
const product3 = new Product();
const product4 = new Product("fancy hat", "clothing", 100)
const product5 = new Product("skateboard")
const product6 = new FancyProduct("Fancy socks");

// product6.fancyFunction();

const products = [product1, product2, product3, product4, product5];

//showing the Object.prototype function is available from every object
//everything is instance of Object

product1.mySuperOwnFunction();
product6.mySuperOwnFunction();
"Hello world".mySuperOwnFunction();
(10).mySuperOwnFunction();
[1, 2, 3].mySuperOwnFunction();
true.mySuperOwnFunction();

// for (i = 0; i < products.length; i++) {
//   const product = products[i];
//   product.displayInfo();
//   console.log("----------------------")
// }
