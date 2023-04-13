
runApp();

function runApp() {

  const products = PRODUCT_DATA.map(item =>
      new Product(item.name, item.type, item.price, item.currency, item.image)
  );

  const container = document.getElementById("productContainer");

  products.forEach(product => {
    const productElement = createProductElement(product)
    container.appendChild(productElement);
  })

  // PRODUCT_DATA.reduce((el, item) => {
  //   const product = createProductElement(new Product(item.name, item.type, item.price, item.currency, item.image))
  //   el.appendChild(product);
  //   return el
  // }, document.getElementById("productContainer"))

}
