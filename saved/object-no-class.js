function Product(
  name = "Default Name", // default data: default parameters
  type = "Default type",
  price,
  currency = "USD",
  image = "unsplash_url"
) {

  this.name = name;
  this.type = type;
  this.price = price;
  this.currency = currency;
  this.image = image;
  this.displayInfo = function(params) {
    console.log("Name: ", this.name);
    console.log("Type: ", this.type);
    console.log("Price: ", this.price);
    console.log("Currency: ", this.currency);
    console.log("Image: ", this.image);
  }
}

Product.prototype.displayInfo2 = function(params) {
  console.log(this.name + " " + this.type);
}

// without the "new", this refers to the window. New allows to create a new object

const product1 = new Product("laptop", "electronics", 500, "USD", "some_url_of_image");
const product2 = new Product("Super shoes", "clothing", 50, "USD", "some_url_of_image");
const product3 = new Product();
const product4 = new Product("fancy hat", "clothing", 100)
const product5 = new Product("skateboard")

const products = [product1, product2, product3, product4, product5];



for (i = 0; i < products.length; i++) {
  const product = products[i];
  product.displayInfo();
  product.displayInfo2();
  console.log(product.address);
  console.log("----------------------")
}
