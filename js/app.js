let productsContainer = document.querySelector('.products-container ul');
let categoriesContainer = document.querySelector('.family-container ul');
let saveListProductsForm = document.querySelector('.save-new-product-container form');
let makeListProductsForm = document.querySelector('.make-new-product-container form');
let newProductForm = document.querySelector('#addProduct form');
let newCategoryForm = document.querySelector('#addCategory form');
let upOptionAll = document.querySelectorAll('.up button');
let divUp = document.querySelector('.up');
let downOptionAll = document.querySelectorAll('.down button');
let divDown = document.querySelector('.down');
let headerStyle = document.querySelector('header');
let settingStyle = document.querySelector('.setting');
let h2 = document.querySelector('h2');
let textH2 = 'Lista towarów, kategoria: ';
let swapAll = document.querySelectorAll('.btn--swap');
let cleanList = document.querySelector('#cleanList');
let cleanAll = document.querySelector('#cleanAll');
let buttonListhopping = document.querySelector('#making');


document.addEventListener('DOMContentLoaded', function() {

    position = "#add333";

    // runnig nav
    $(document).ready(function() {
        let NavY = $('.myNav').offset().top;
        let stickyNav = function(){
            let ScrollY = $(window).scrollTop();	  
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
        textH2="Lista zakupów";
            if (categoryName=="Wszystkie"){
                textH2="Lista zakupów";
                h2.innerHTML = textH2;
                document.querySelector('#making').innerHTML="Powrót do tworzenia listy";
            } else {
                textH2="Lista zakupów, kategria: ";
                h2.innerHTML = textH2 + categoryName;
            }
    } else {
        showProducts();
    }

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


    [].forEach.call(swapAll, function(swap) {
        swap.addEventListener('mouseover', () => {
            swap.disabled = true;
            setTimeout( () => {
                swap.disabled = false;
            }, 2500 );
        });
    });

    // czyszczenie listy zakupów
    cleanListProducts();

    // czyszczenie wszystkich danych w app
    cleanAllApp();

    // rozwijany header 
    upOptionList();
    downOptionList();

    // Listener dla elementu 'pozostałe'
    //wyświetla produkty nie przypisane do katedorii
    // document.querySelector("#other").addEventListener("click",function(event){
    //     event.preventDefault();
    //     showProductsOther();
    // });

    h2.innerHTML = textH2 + categoryName;
    if (optionView) {
        divDown.classList.add("hidden");
        divUp.classList.remove("hidden");
        headerStyle.classList.add("optionYes");
        headerStyle.classList.remove("optionNo");
        settingStyle.style.display = "flex";
    }
});

function upOptionList(){
    [].forEach.call(upOptionAll, function(upOption) {
        upOption.addEventListener('click', function(event) { 
        divUp.classList.add("hidden");
        divDown.classList.remove("hidden");
        headerStyle.classList.add("optionNo");
        headerStyle.classList.remove("optionYes");
        settingStyle.style.display = "none";
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
        settingStyle.style.display = "flex";
        divUp.style.display = "flex";
        optionView = true;
      })
    })
};

function trim(text){
    temp = "";
    while(text.indexOf(" ")==0){
        for (j=1; j<text.length; j++) temp += text[j];
        text = temp;
        temp = "";
    }
    text = text.toUpperCase().charAt(0) + text.substr(1, text.length);
    return text;
};