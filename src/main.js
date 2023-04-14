
runApp();

// simulation of how react js components would look like
function TestItem() {

  const text = "This is my text item"
  return `
  <div class="test-item">
    <span>${text}</span>
  </div>
  `
}

const testContainer = document.getElementById("testContainer");
testContainer.insertAdjacentHTML("beforeend", TestItem());

// const createAndAppendTo = (container) => {
//   return function (item) {
//     const product = new Product(item.name, item.type, item.price, item.currency, item.image)
//     const productElement = createProductElement(product)
//     container.appendChild(productElement);
//   }
// }
async function runApp() {
  try {

    const response = await fetch("https://product-app-101-server.vercel.app/api/products");
    const productData = await response.json();

    const products = productData.map(item =>
      new Product(item.name, item.type, item.price, item.currency, item.image, item.isOnStock)
    );

    const container = document.getElementById("productContainer");

    products.forEach(product => {
      const productElement = createProductElement(product);

      container.appendChild(productElement);
    })
  } catch(error) {
    console.log(error.message);
  }
}



