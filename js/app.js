var newProductForm = document.querySelector('.new-product-container form');
var productsContainer = document.querySelector('.products-container ul');

document.addEventListener('DOMContentLoaded', function() {
    addProductToList();

    showProducts();
    // console.log(productsContainer);

});