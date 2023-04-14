// to be deleted

const PRODUCT_DATA = [{
  name: "Laptop",
  type: "electronics",
  price: 500,
  currency: "usd",
  image: "some_url_of_image"
}, {
  name: "Super shoes",
  type: "clothing",
  price: 50,
  currency: "usd",
  image: "some_url_of_image"
}, {
  name: "Smartphone",
  type: "phones",
  price: 300,
  currency: "usd",
  image: "some_url_of_image"
}, {
  name: "Fancy Hat",
  type: "clothing",
  price: 100,
  currency: "usd",
  image: "some_url_of_image"
}]

function getProductData() {
  return PRODUCT_DATA;
}

// assignment

function getProductDataAsync() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {

      // if (true) {
      //   reject( new Error('Ooops, some error occurred!'));
      // }

      const response = {
        json: async function () {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve(PRODUCT_DATA);
            }, 20)
          })
        }
      }

      resolve(response);
    }, 1000);
  })
}

// function getProductDataAsync() {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(PRODUCT_DATA);
//         }, 3000);
//     })
// }