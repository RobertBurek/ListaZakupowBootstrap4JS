var productsContainer = document.querySelector('.products-container ul');
var newProductForm = document.querySelector('.new-product-container form');
var saveListProductsForm = document.querySelector('.save-new-product-container form');



document.addEventListener('DOMContentLoaded', function() {

    // document.querySelector('#loadingZapis').addEventListener('mouseover', function() {
        // this.classList.add('element-is-busy');
        // this.disabled = true;
        
        // this.disabled = false;
        // form.submit();
    // });


    // Show products
    showProducts();

    // console.log(productsContainer);

    addProductToList();

    saveListProducts();

});