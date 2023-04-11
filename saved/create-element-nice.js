runApp();

function runApp() {

  const createElementWithClass = (el, className) => {
    const field = document.createElement(el);
    field.classList.add(className);
    return field;
  }

  const createProductRowElement = () => {
    return createElementWithClass("div", "product-row");
  }

  const createFieldElement = (label, value) => {
    // Product field DIV
    const productField = createElementWithClass("div", "product-field");

    // Product Label SPAN
    const productLabel = createElementWithClass("span", "product-label");
    productLabel.innerHTML = `${label}:`;
    productField.appendChild(productLabel);

    // Add value
    const textContent = document.createTextNode(value);
    productField.appendChild(textContent);

    return productField;
  }

  const createProductElement = (elements) => {
    const productElement = createElementWithClass("div", "product");

    elements.forEach((element) => {
      productElement.appendChild(createFieldElement(element[0], element[1]))
    })

    return productElement;
  }

  const row = createProductRowElement();
  const productElement1 = createProductElement([
    ["Name", "Laptop"],
    ["Type", "Electronics"],
    ["Price", 500],
    ["Currency", "USD"],
    ["Image", "some url of image"]
  ]);

  const productElement2 = createProductElement([
    ["Name:", "Laptop"],
    ["Type:", "Electronics"],
    ["Price:", 500],
    ["Currency:", "USD"],
    ["Image:", "some url of image"]
  ]);

  row.appendChild(productElement1);
  row.appendChild(productElement2);

  const container = document.getElementById("productContainer");
  container.appendChild(row);
}