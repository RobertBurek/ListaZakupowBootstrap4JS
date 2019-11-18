var newProductForm = document.querySelector('.new-product-container form');
var productsContainer = document.querySelector('.products-container ul');

document.addEventListener('DOMContentLoaded', function() {
    addProductToList();

    // Show products
    showProducts();
    // console.log(productsContainer);

});