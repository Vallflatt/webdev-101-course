// function createProductElement that takes a product as parameter and creates a productElement
// 1. create a html element stored in a variable productElement
// 2. add a class to this element
// 3. return element
// REFACTOR: isolate this in a function _createElement
// 4. create an array of html labels stored in a variable productLabels (name, type, price, currency, image)
// 5. iterate on the productLabels array:
//    for each label, store in a variable called productField an html element with a type "div"
//      and a class "product-field"
//    for each label, store in a variable called productLabel an html element with a type "span"
//      and a class "product-label"
// 6. create the innerHTML content for each label
// 7. in a variable called text, store the textnode for each label (lower case better)
// 8. append elements so that the function returns productElement ready

function _createElement(tag, className) {
  //create type and add class to type
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

function createProductElement(product) {
  const productElement = _createElement('div', 'product')
  const productLabels = ["Name", "Type", "Price", "Currency", "Image"]

  productLabels.forEach(label => {
    const productField = _createElement("div", "product-field")
    const productLabel = _createElement("span", "product-label")
    productLabel.innerHTML  = `${label}:`
    const text = document.createTextNode(product[label.toLowerCase()])

    productField.appendChild(productLabel)
    productField.appendChild(text)
    productElement.appendChild(productField)
  })

  return productElement;
}