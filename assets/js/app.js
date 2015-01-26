var productPage = {

  init: function() {
    //Some fancy init stuff goes here.
  },
  addProduct: function(product, index, arry) {
    var compiled = _.template(templates.product);
    console.log(compiled(product));
    $('section').append(compiled(product));
  },
  addAllProducts: function (productData) {
    productData.forEach(productPage.addProduct);
  }

};


$(document).ready(function () {
  // code goes here for page.
  productPage.init();
  console.log("Product Page init!")
  productPage.addAllProducts(products);
  // init();
});
