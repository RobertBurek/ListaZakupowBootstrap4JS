var productsContainer = document.querySelector('.products-container ul');
var categoriesContainer = document.querySelector('.family-container ul');
var saveListProductsForm = document.querySelector('.save-new-product-container form');
var newProductForm = document.querySelector('#addProduct form');
var upOptionAll = document.querySelectorAll('.up button');
var divUp = document.querySelector('.up');
var downOptionAll = document.querySelectorAll('.down button');
var divDown = document.querySelector('.down');
var headerStyle = document.querySelector('header');
var settingStyle = document.querySelector('.setting');
var h2 = document.querySelector('h2');



document.addEventListener('DOMContentLoaded', function() {

    // Show products
    showProducts();

    showCategories();
    console.log(categoriesContainer);

    addProductToList();

    saveListProducts();

    upOptionList();
    downOptionList();

    document.querySelector("#other").addEventListener("click",function(event){
        event.preventDefault();
        showProductsOther();
    });

    h2.innerHTML='Lista zakupów, kategoria : ' + categoryName;
    // console.log(option);
    if (optionView) {
        divDown.style.display="none";
        headerStyle.style.height="305px";
        settingStyle.style.display="flex";
        divUp.style.display="flex";
    }
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

