function addNewProductToList(product, index){
    var product_Li = document.createElement('li');

    product_Li.classList.add('single-product');
    if (product[0]=="") product_Li.classList.add('hidden');

    product_Li.innerHTML = prepareListProductHTML(product, index);

    // // Event - select product
    // var selectProductBtn = product_Li.querySelector('.select-product-btn');


    // Event - delete product
    var deleteProductBtn = product_Li.querySelector('.delete-product-btn');
    deleteProductBtn.addEventListener('click',function(){
        var liToDelete = this.closest('li');
        console.log(liToDelete);
        liToDelete.classList.toggle('hidden');
    })

    // productsContainer.prepend(product_Li);
    productsContainer.appendChild(product_Li);
};

    function prepareListProductHTML(product, index){
        return  '<div class="input-group" style="display:flex;width: 80%;">' +
                '	<input type="text" class="form-control" id="name' + index + '" placeholder="Nazwa produktu..." value="' + product[0] + '" disabled>' +
                '	<input style="width: 60px;"type="text" class="form-control" id="add' + index + '" placeholder="0" value="' + product[1] + '" disabled>' +
                '	<span class="input-group-btn">' +
                '		<button class="btn btn-danger delete-product-btn" value="' + index + '"><i class="fa fa-times"></i></button>' +
                '	</span>' +
                '</div>' ;
    }


function makeListProducts(){
    makeListProductsForm.addEventListener('submit',function(event){
        event.preventDefault();
        showListProducts();
    });
}

function showListProducts(){
    productsContainer.innerHTML="";
    products.forEach((product,number)=>{
        if (product[2]=="btn-success") {
            addNewProductToList(product,number);
        }
    });
    shoppingList = true;
}

