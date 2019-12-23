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
        liToDelete.classList.toggle('hidden');
        products[index][2]="";
    })

    // productsContainer.prepend(product_Li);
    productsContainer.appendChild(product_Li);
};

    function prepareListProductHTML(product, index){
        return  '<div class="input-group" style="display:flex;width: 88%;">' +
                '	<input style="width: 300px;" type="text" class="form-control form-list" id="name' + index + '" placeholder="Nazwa produktu..." value="' + product[0] + '" disabled>' +
                '	<input style="width: 30px; padding-left: 0px; padding-right: 0px; text-align: center;" type="text" class="form-control form-list" id="add' + index + '" placeholder="0" value="' + product[1] + '" disabled>' +
                '	<input style="width: 50px; padding-left: 0px; padding-right: 20px;;" type="text" class="form-control form-list" id="add' + index + '" placeholder="0" value="szt." disabled>' +
                '	<span class="input-group-btn">' +
                '		<button class="btn btn-danger delete-product-btn" value="' + index + '"><i class="fa fa-times"></i></button>' +
                '	</span>' +
                '</div>' ;
    }


function makeListProducts(){
    makeListProductsForm.addEventListener('submit',function(event){
        console.log(shoppingList);
        event.preventDefault();
        if (!shoppingList) {
            console.log("lista zakupów")
            showListProducts();
            buttonListhopping.innerHTML="Powrót do tworzenia listy";
            console.log(shoppingList);
        } else{
            console.log("lista towarów")
            showProducts();
            buttonListhopping.innerHTML="Pokaż listę zakupów";
            textH2="Lista towarów, kategria: ";
            h2.innerHTML = textH2 + categoryName;
            // shoppingList="false";
            console.log(shoppingList);
        }
    });
}

function showListProducts(){
    productsContainer.innerHTML="";
    products.forEach((product,number)=>{
        if (product[2]=="btn-success") {
            addNewProductToList(product,number);
        }
    });
    if (categoryName=="Wszystkie"){
        textH2="Lista zakupów";
        h2.innerHTML = textH2;
    } else {
        textH2="Lista zakupów, kategria: ";
        h2.innerHTML = textH2 + categoryName;
    }
    shoppingList = true;
}

