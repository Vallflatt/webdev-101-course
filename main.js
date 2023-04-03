runApp();

function runApp() {

  // examples for callback functions
  // const productElement1 = document.getElementById("product1");
  const productElements = document.getElementsByClassName("product");
  const container = document.getElementById("productContainer");
  // function to create the html structure: 1. div product row, div product 1, div product
  // field span product label 5 times

  const createProductRow = () => {
    const row = document.createElement("div");
    row.classList.add("product-row")
    return row;
  }

  const createProductElement = () => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    return productElement;
  }

  const row = createProductRow();
  const productElement = createProductElement();

  row.appendChild(productElement);
  container.appendChild(row);



  // for(let i = 0; i < productElements.length; i++) {
  //   const product = productElements[i]
  //   product.addEventListener("click", () => {console.log(`Hello World ${i + 1}`)});
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
