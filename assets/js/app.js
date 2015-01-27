var productPage = {



  init: function() {
    productPage.initStyling();
    productPage.initEvents();
    window.prodIndexG = 0;
  },
  initStyling: function() {
    console.log("styling initialized!");
    productPage.renderAllProducts(products);
  },
  initEvents: function() {
    console.log("events are bound!");
    ///////////////////////////////////
    //CRUD BINDINGS////////////////////

    //CREATE///////////////////////////
    $('form.create-product-form').on('submit', function (event){
      event.preventDefault();
      productPage.createProduct();

      //close overlay
      $('.overlay').removeClass('active');
      $('.overlay form').removeClass('active');
    });
    //UPDATE///////////////////////////
    $('form.edit-product-form').on('submit', function (event){
      event.preventDefault();
      productPage.updateProduct();

      //close overlay
      $('.overlay').removeClass('active');
      $('.overlay form').removeClass('active');
    });
    //DELETE///////////////////////////
    $('section').on('click', '.delete-product', productPage.deleteProduct);

    //END CRUD BINDINGS////////////////
    ///////////////////////////////////


    //Show overlay for create and edit screen
    $('section article').on('click', '.open-edit-product', productPage.showEditOverlay);
    $('section article').on('click', '.open-edit-product', productPage.bindProduct);
    $('.container').on('click', '.open-create-product', productPage.showCreateOverlay);
    //Close overlay on 'X' click
    $('.overlay').on('click', 'i.fa-close', function() {
      $('.overlay').removeClass('active');
      $('.overlay form').removeClass('active');
    });
    //Closes overlay after pressing escape
    $("body").keyup( function(e) {
      if (e.keyCode == 27) {
        $('.overlay').removeClass('active');
        $('.overlay form').removeClass('active');
      }
    });
  },

  //// Show overlays and form when ////
  //// click on edit/create buttons ///
  showEditOverlay : function() {
    $('.overlay').addClass('active');
    $('.edit-product-form').addClass('active');
  },
  showCreateOverlay : function() {
    $('.overlay').addClass('active');
    $('.create-product-form').addClass('active');
  },



  /////////////////////////////////////
  //// C  /////////////////////////////
  createProduct: function() {
    var newProduct = {
      title: $('.create-product-form input[name="title"]').val(),
      category: $('.create-product-form input[name="category"]').val(),
      imageURL: $('.create-product-form input[name=imageURL]').val(),
      price: $('.create-product-form input[name="price"]').val(),
      description: $('.create-product-form textarea[name="description"]').val()
    }

    //add the new product to our array of product objects
    products.push(newProduct);
    //render the product so it displays on the page
    productPage.renderProduct(newProduct, products.indexOf(newProduct));

    //clear input areas
    $('.create-product-form input').val('');
    $('.create-product-form textarea').val('');

  },
  /////////////////////////////////////
  /////////////////////////////////////




  /////////////////////////////////////
  //// R  /////////////////////////////
  renderProduct: function(product, index, arry) {
    product.idx = index;

    var compiled = _.template(templates.product);
    $('section').append(compiled(product));

  },
  renderAllProducts: function (productData) {
    _.each(productData, productPage.renderProduct);
  },
  /////////////////////////////////////
  /////////////////////////////////////




  /////////////////////////////////////
  //// U  /////////////////////////////
  bindProduct: function(event) {
    var prodIndex = $(this).closest('article').data('index');
    prodIndexG = prodIndex;
    console.log(products[prodIndexG]);
  },


  updateProduct: function () {
    //update data
    products[prodIndexG] = {
      title: $('.edit-product-form input[name="title"]').val(),
      category: $('.edit-product-form input[name="category"]').val(),
      imageURL: $('.edit-product-form input[name=imageURL]').val(),
      price: $('.edit-product-form input[name="price"]').val(),
      description: $('.edit-product-form textarea[name="description"]').val()
    }

    var updatedProduct = products[prodIndexG];
    updatedProduct.idx = prodIndexG;
    console.log(updatedProduct);
    console.log(prodIndexG);

    //Clear input areas
    $('.edit-product-form input').val('');
    $('.edit-product-form textarea').val('');

    var updated = _.template(templates.product);
    console.log(updated(updatedProduct));
    var cur = $('.products article[data-index="'+prodIndexG+'"]');
    console.log(cur);
    //update page
    cur.before(updated(updatedProduct));
    cur.remove();
  },
  /////////////////////////////////////
  /////////////////////////////////////




  /////////////////////////////////////
  //// D  /////////////////////////////
  deleteProduct: function (event) {
    var prodIndex = $(this).closest('article').data('index');
    products.splice(prodIndex, 1);
    $(this).closest('article').fadeOut("normal", function() {
      $(this).remove();
    });
    console.log("POOF!")
  },
  /////////////////////////////////////
  /////////////////////////////////////
};


$(document).ready(function () {
  // code goes here for page.
  productPage.init();
});
