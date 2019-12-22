// Show product
function showProducts() {
    textH2 = "Lista towarów, kategoria: ";
    productsContainer.innerHTML = "";
    products.forEach((product,number)=>{
        if (categoryName!="Wszystkie") {
            if (product[3]==categoryName) addNewProduct(product,number);
        } else addNewProduct(product,number);
    });
    shoppingList = false;
}

function showProductsOther() {
    productsContainer.innerHTML = "";
    products.forEach((product,number)=>{
    if (product[3]=="") addNewProduct(product,number);
    });
}

// Delete product
function deletedProduct(product) {
    product.classList.toggle('btn-success');
}

//Clean list product
function cleanListProducts() {
    cleanList.addEventListener('click',(event) => {
        event.preventDefault();
        products.forEach((product) => product[2]="");
        showProducts();
    });
}

//Clean wszystkie dane w app
function cleanAllApp() {
    cleanAll.addEventListener('click',(event) => {
        event.preventDefault();
        products = [];
        categories = [];
        categoryName = " ";
        h2.innerHTML = textH2 + categoryName;
        showProducts();
        showCategories();
    });
}