// Show product
function showProducts() {
    products.forEach((product,number)=>{
        // console.log(product,number);

        addNewProduct(product,number);
        
    });
}

// Select product
function selectedProduct(product){
    product.classList.toggle('btn-success');
}

