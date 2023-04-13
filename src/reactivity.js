const _createElement = (elementType, classList) => {
  const element = document.createElement(elementType);
  element.classList.add(classList);
  return element;
}

const createProductElement = (product) => {
  const productElement = _createElement("div", "product");
  // improvements: how to create the labels dynamically from the product

  //const productLabels = ["Name", "Type", "Price", "Currency", "Image"];
  const productLabels = Object.keys(product);

  productLabels.forEach(label => {
    const productField = _createElement("div", "product-field");
    const productLabel = _createElement("span", "product-label");

    productLabel.innerHTML = `${label[0].toUpperCase() + label.substring(1)}:`
    // const formattedProductLabel = label.charAt(0).toUpperCase() + label.slice(1);
    // productLabel.innerHTML = `${formattedProductLabel}:`;
    const text = document.createTextNode(product[label]);

    productField.appendChild(productLabel);
    productField.appendChild(text);
    productElement.appendChild(productField);
  })

  return productElement;

}