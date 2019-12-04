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

    $(document).ready(function() {
        var NavY = $('.myNav').offset().top;
        var stickyNav = function(){
            var ScrollY = $(window).scrollTop();	  
            if (ScrollY > NavY) { 
                $('.myNav').addClass('sticky');
                // upOptionList();
                // console.log("teraz"+$(window).scrollTop());
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
    showProducts();

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
        // headerStyle.style.height="305px";
        settingStyle.style.display="flex";
        // divUp.style.display="flex";

        // divDown.style.display="none";
        // divUp.classList.add("hidden");
        // headerStyle.style.height="305px";
        // settingStyle.style.display="flex";
        // divUp.style.display="flex";
    }
});

function upOptionList(){
    [].forEach.call(upOptionAll, function(upOption) {
        upOption.addEventListener('click', function(event) { 
        divUp.classList.add("hidden");
        divDown.classList.remove("hidden");
        // headerStyle.className.height="160px";
        headerStyle.classList.add("optionNo");
        headerStyle.classList.remove("optionYes");
        settingStyle.style.display="none";
        // divDown.style.display="flex";
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
        // headerStyle.style.height="305px";
        settingStyle.style.display="flex";
        divUp.style.display="flex";
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
    return text;
};