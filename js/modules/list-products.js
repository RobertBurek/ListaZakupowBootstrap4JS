// Show product
function showProducts() {
    productsContainer.innerHTML="";
    products.forEach((product,number)=>{
        // console.log(product[3],categoryName);
        if (categoryName!="Wszystkie") {
            if (product[3]==categoryName) addNewProduct(product,number);
        } else addNewProduct(product,number);
    });
}

function showProductsOther() {
    productsContainer.innerHTML="";
    products.forEach((product,number)=>{
        // console.log(product[3],categoryName);
    if (product[3]=="") addNewProduct(product,number);
    });
}

// Select product
// function selectedProduct(product){
//     product.classList.toggle('btn-success');
// }

// Delete product
function deletedProduct(product){
    product.classList.toggle('btn-success');
}

console.log(products);