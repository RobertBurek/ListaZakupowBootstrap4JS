var productsContainer = document.querySelector('.products-container ul');
var categoriesContainer = document.querySelector('.family-container ul');
var saveListProductsForm = document.querySelector('.save-new-product-container form');
var makeListProductsForm = document.querySelector('.make-new-product-container form');
var newProductForm = document.querySelector('#addProduct form');
var newCategoryForm = document.querySelector('#addCategory form');
var upOptionAll = document.querySelectorAll('.up button');
var divUp = document.querySelector('.up');
var downOptionAll = document.querySelectorAll('.down button');
var divDown = document.querySelector('.down');
var headerStyle = document.querySelector('header');
var settingStyle = document.querySelector('.setting');
var h2 = document.querySelector('h2');


document.addEventListener('DOMContentLoaded', function() {

    position = "#add333";

    $(document).ready(function() {
        var NavY = $('.myNav').offset().top;
        var stickyNav = function(){
            var ScrollY = $(window).scrollTop();	  
            if (ScrollY > NavY) { 
                $('.myNav').addClass('sticky');
            } else {
                $('.myNav').removeClass('sticky'); 
            }
        };
        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    });

    // Show products
    if(shoppingList) {
        showListProducts();
    } else {
        showProducts();}

    if(optionView) {
        settingStyle.style.display="flex";
    } else {
        settingStyle.style.display="none";
    }

    // Show categories
    showCategories();

    addProductToList();
    addCategoryToList();

    saveListProducts();
    makeListProducts();

    // rozwijany header 
    upOptionList();
    downOptionList();

    // Listener dla elementu 'pozostałe'
    //wyświetla produkty nie przypisane do katedorii
    // document.querySelector("#other").addEventListener("click",function(event){
    //     event.preventDefault();
    //     showProductsOther();
    // });

    h2.innerHTML='Lista zakupów, kategoria : ' + categoryName;
    if (optionView) {
        divDown.classList.add("hidden");
        divUp.classList.remove("hidden");
        headerStyle.classList.add("optionYes");
        headerStyle.classList.remove("optionNo");
        settingStyle.style.display="flex";
    }
});

function upOptionList(){
    [].forEach.call(upOptionAll, function(upOption) {
        upOption.addEventListener('click', function(event) { 
        divUp.classList.add("hidden");
        divDown.classList.remove("hidden");
        headerStyle.classList.add("optionNo");
        headerStyle.classList.remove("optionYes");
        settingStyle.style.display="none";
        optionView = false;
      })
    })
};

function downOptionList(){
    [].forEach.call(downOptionAll, function(downOption) {
        downOption.addEventListener('click', function(event) { 
        divDown.classList.add("hidden");
        divUp.classList.remove("hidden");
        headerStyle.classList.add("optionYes");
        headerStyle.classList.remove("optionNo");
        settingStyle.style.display="flex";
        divUp.style.display="flex";
        optionView = true;
      })
    })
};

function trim(text){
    temp = "";
    while(text.indexOf(" ")==0){
        for (j=1;j<text.length;j++) temp += text[j];
        text = temp;
        temp = "";
    }
    text=text.toUpperCase().charAt(0)+text.substr(1, text.length);
    return text;
};