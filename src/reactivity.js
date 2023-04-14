const _createElement = (elementType, classList) => {
  const element = document.createElement(elementType);
  element.classList.add(classList);
  return element;
}

const createProductElement = (product) => {

  const productElement = _createElement("div", "product");
  productElement.classList.add(product.isOnStock ? "product-on-stock" : "product-not-on-stock");

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