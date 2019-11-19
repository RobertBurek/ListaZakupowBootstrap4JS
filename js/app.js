var productsContainer = document.querySelector('.products-container ul');
var newProductForm = document.querySelector('.new-product-container form');
var saveListProductsForm = document.querySelector('.save-new-product-container form');



document.addEventListener('DOMContentLoaded', function() {


    // Show products
    showProducts();

    // console.log(productsContainer);

    addProductToList();

    saveListProducts();

});