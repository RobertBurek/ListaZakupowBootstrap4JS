// Show product
function showProducts() {
    products.forEach((product,number)=>{
        addNewProduct(product,number);
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