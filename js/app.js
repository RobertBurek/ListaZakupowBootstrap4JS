var productsContainer = document.querySelector('.products-container ul');
var saveListProductsForm = document.querySelector('.save-new-product-container form');
var newProductForm = document.querySelector('#addProduct form');
var upOptionAll = document.querySelectorAll('.up button');
var divUp = document.querySelector('.up');
var downOptionAll = document.querySelectorAll('.down button');
var divDown = document.querySelector('.down');
var headerStyle = document.querySelector('header');
var settingStyle = document.querySelector('.setting');
var kategoria = "Wszystkie";




document.addEventListener('DOMContentLoaded', function() {

    // Show products
    showProducts();

    // console.log(productsContainer);

    addProductToList();

    saveListProducts();

    showCategories();

    upOptionList();
    downOptionList();

});

function upOptionList(){
    [].forEach.call(upOptionAll, function(upOption) {
        upOption.addEventListener('click', function(event) { 
        // alert(this.innerText + " Clicked!");
        divUp.style.display="none";
        headerStyle.style.height="160px";
        settingStyle.style.display="none";
        divDown.style.display="flex";
      })
    })
};

function downOptionList(){
    [].forEach.call(downOptionAll, function(downOption) {
        downOption.addEventListener('click', function(event) { 
        // alert(this.innerText + " Clicked!");
        divDown.style.display="none";
        headerStyle.style.height="305px";
        settingStyle.style.display="flex";
        divUp.style.display="flex";
      })
    })
};

