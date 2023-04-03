runApp();

function runApp() {

  // my function, not needed anymore
  // function getProductElement(elementId) {
  //   const productElement = document.getElementById(elementId);
  //   productElement.addEventListener("click", clickHandler);
  // }

  // examples for callback functions
  const productElement1 = document.getElementById("product1");
  const productElement2 = document.getElementById("product2");
  const productElement3 = document.getElementById("product3");
  const productElement4 = document.getElementById("product4");

  const createClickHandler = (message, name) => () => console.log(message + " " + name);

  // advantages of arrow functions: one line without curly brackets possible if only 1 line of instruction and 1 parameter
  const clickHandler = () => console.log("Hello World");
  const clickHandler2 = createClickHandler("Hi there!", "Filip");

  // function createClickHandler(message) {
  //   const name = "Filip"
  //   return function() {
  //     console.log(message + " " + name);
  //   }
  // }

  productElement1.addEventListener("click", clickHandler);
  productElement2.addEventListener("click", clickHandler2);
  productElement3.addEventListener("click", createClickHandler("I have no idea", "Filip"));
  productElement4.addEventListener("click", () => console.log("I am anonymous function!"));

  // const clickHandler2 = createClickHandler("Hi there!");

  // my call to my function, not needed anymore
  // [
  //   "product1",
  //   "product2",
  //   "product3",
  //   "product4"
  // ].forEach(getProductElement)

  // function clickHandler(){
  //   console.log("hello world");
  // }

  class Product {
    constructor(
      name = "Default Name",
      type,
      price,
      currency = "usd",
      image = "unsplash_url"
    ) {
      this.name = name;
      this.type = type;
      this.price = price;
      this.currency = currency;
      this.image = image;
    }

    displayInfo(additionalInfo = "") {
      const info = `
      Name: ${this.name}, 
      Type: ${this.type},
      Price: ${this.price}, 
      Currency: ${this.currency},
      Image: ${this.image}
      ${additionalInfo}`;

      console.log(info);
    }
  }

  const product1 = new Product("Laptop", "electronics", 500, "usd", "some_url_of_image");
  const product2 = new Product("Super shoes", "clothing", 50, "usd", "some_url_of_image");
  const product3 = new Product("Smartphone", "phones", 300, "USD", "some_url_of_image");
  const product4 = new Product("Fancy Hat", "clothing", 100, "USD", "some_url_of_image");

  const products = [product1, product2, product3, product4];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    product.displayInfo();
    console.log("-----------------");
  }
}
