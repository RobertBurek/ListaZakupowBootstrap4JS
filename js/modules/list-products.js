// Show product
function showProducts() {
    productsContainer.innerHTML="";
    products.forEach((product,number)=>{
        if (categoryName!="Wszystkie") {
            if (product[3]==categoryName) addNewProduct(product,number);
        } else addNewProduct(product,number);
    });
    shoppingList = false;
}

function showProductsOther() {
    productsContainer.innerHTML="";
    products.forEach((product,number)=>{
    if (product[3]=="") addNewProduct(product,number);
    });
}

// Delete product
function deletedProduct(product){
    product.classList.toggle('btn-success');
}
