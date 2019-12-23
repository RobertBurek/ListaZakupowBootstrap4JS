// let isNew = false;

function addNewProduct(product, index){
    var product_Li = document.createElement('li');

    product_Li.classList.add('single-product');
    if (product[0]=="") product_Li.classList.add('hidden');

    product_Li.innerHTML = prepareProductHTML(product, index);

    // Event - select product
    var selectProductBtn = product_Li.querySelector('.select-product-btn');
    selectProductBtn.addEventListener('click', function(){
        if (products[index][2]=="") 
            products[index][2] = "btn-success";
        else
            products[index][2] = "";
        this.classList.toggle('btn-success');
        if (products[index][1]==0) additionButton();
    });

    // Event - delete product
    var deleteProductBtn = product_Li.querySelector('.delete-product-btn');
    deleteProductBtn.addEventListener('click',function(){
        var liToDelete = this.closest('li');
        liToDelete.classList.toggle('hidden');
        products[index][0] = ""; products[index][1] = ""; products[index][2] = "";
    })

    // Event - delete product , right click.
    // wykorzystywane do przypisania produktu do kategorii
    //  gdy włączona jest linia 'ul' 'pozostałe' w index.html
    // deleteProductBtn.addEventListener('contextmenu',function(){
    //     var liToDelete = this.closest('li');
    //     // console.log(liToDelete);
    //     liToDelete.classList.toggle('hidden');
    //     products[index][3]=categoryName;
    //     // saveList();
    //     console.log(deleteProductBtn);
    // })

    // Event - input right click.
    var inputProductBtn = product_Li.querySelector('.myInput');
    inputProductBtn.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        var inputThis = document.querySelector('#name'+index);
        if (inputThis.style.color=="red") {
            inputThis.disabled = true;
            inputThis.style.color = "";
            inputThis.style.fontWeight = "";
            product[0] = inputThis.value;
        } else {
            inputThis.disabled = false;
            inputThis.style.color = "red";
            inputThis.style.fontWeight = "bold";
            inputThis.focus();
        }
        return false;
    }, false);

    // Event - addition
    var additionBtn = product_Li.querySelector('.plus-product-btn');
    additionBtn.addEventListener('click', function(){
        additionButton();
    });

    function additionButton(){
        var valueThis = document.querySelector('#add'+index);
        var state=parseInt(valueThis.getAttribute('value'));
        if (state < 99) valueThis.setAttribute('value',state+1);
        products[index][1] = valueThis.value;
        if (products[index][2]=="") {
        products[index][2] = "btn-success";
        selectProductBtn.classList.toggle('btn-success');
        };
    };

    // Event - reduction
    var reductionBtn = product_Li.querySelector('.minus-product-btn');
    reductionBtn.addEventListener('click', function(){
        var valueThis = document.querySelector('#add'+index);
        var state=parseInt(valueThis.getAttribute('value'));
        if ((valueThis.value==1)&&(products[index][2]=="btn-success")){
            products[index][2] = "";
            selectProductBtn.classList.toggle('btn-success');
        };
        if ((valueThis.value>1)&&(products[index][2]=="")){
            products[index][2] = "btn-success";
            selectProductBtn.classList.toggle('btn-success');
        };
        if (state > 0) valueThis.setAttribute('value',state-1);
        products[index][1] = valueThis.value;
    });

    // Add product to DOM
    // if ((product[0]!="") && (isNew)){ 
    if (product[0]!="") {
        // if (isNew) { 
            // productsContainer.prepend(product_Li);
            // isNew = false;
        // }else {
             productsContainer.appendChild(product_Li);
        // }
    }
};


function prepareProductHTML(product, index){
    return  '<div class="input-group">' +
		 	'	<span class="input-group-btn">' +
			'		<button class="btn btn-default select-product-btn '+ product[2] +'" value="' + index + '"><i class="fa fa-check"></i></button>' +
            '	</span>' +
            '   <span class="myInput">' +
			'	<input type="text" class="form-control" id="name' + index + '" placeholder="Nazwa produktu..." value="' + product[0] + '" disabled>' +
            '	</span>' +
            '   <span class="input-group-btn">' +
			'		<button class="btn btn-danger delete-product-btn" value="' + index + '"><i class="fa fa-times"></i></button>' +
			'	</span>' +
			'</div>' +
			'<div class="input-group input-group-sm position' + index + '">' +
			'	<span class="input-group-btn">' +
			'		<button class="btn  plus-product-btn" value="' + index + '"><i class="fa fa-plus-square"></i></button>' +
			'	</span>' +
			'	<input type="text" class="form-control" id="add' + index + '" placeholder="0" value="' + product[1] + '" disabled>' +
			'	<span class="input-group-btn">' +
			'		<button class="btn  minus-product-btn" value="' + index + '"><i class="fa fa-minus-square"></i></button>' +
			'	</span>' +
            '</div>';
}

function addProductToList(){
    //on submint
    newProductForm.addEventListener('submit',function(event){
        event.preventDefault();
        var nameProduct = this.querySelector('input').value;
        if (nameProduct){
            nameProduct = trim(nameProduct);
            var newProduct = [nameProduct, 1, 'btn-success', categoryName];
            products.unshift(newProduct);
            showProducts();
            // products.push(newProduct);
            // isNew = true;
            // addNewProduct(newProduct,products.length-1);
            this.querySelector('input').value = "";
        };
    });
}

function saveListProducts(){
    saveListProductsForm.addEventListener('submit',function(){
        // event.preventDefault();
        var buttonFrom = document.querySelector('#saving');
        buttonFrom.classList.add('element-is-busy');
        buttonFrom.disabled = true;
        saveList();
    });
}

function saveList(){

    saveListProductsForm.innerHTML = '<span class="group">'+
                                        '<button class="btn btn-danger" type="submit" id="saving">Zapisz zmiany</button>'+
                                    '</span>';

    var inputStartParamsCategoryName = document.createElement('input');
    inputStartParamsCategoryName.setAttribute("type","hidden");
    inputStartParamsCategoryName.setAttribute("name","categoryName");
    inputStartParamsCategoryName.setAttribute("value",categoryName);
    saveListProductsForm.prepend(inputStartParamsCategoryName);

    var inputStartParamsOptionView = document.createElement('input');
    inputStartParamsOptionView.setAttribute("type","hidden");
    inputStartParamsOptionView.setAttribute("name","optionView");
    inputStartParamsOptionView.setAttribute("value",optionView);
    saveListProductsForm.prepend(inputStartParamsOptionView);

    var inputStartParamsShoppingList = document.createElement('input');
    inputStartParamsShoppingList.setAttribute("type","hidden");
    inputStartParamsShoppingList.setAttribute("name","shoppingList");
    inputStartParamsShoppingList.setAttribute("value",shoppingList);
    saveListProductsForm.prepend(inputStartParamsShoppingList);

    var inputStartParamsPosition = document.createElement('input');
    inputStartParamsPosition.setAttribute("type","hidden");
    inputStartParamsPosition.setAttribute("name","position");
    inputStartParamsPosition.setAttribute("value",position);
    saveListProductsForm.prepend(inputStartParamsPosition);

    var inputFromListProducts = document.createElement('input');
    inputFromListProducts.setAttribute("type","hidden");
    inputFromListProducts.setAttribute("name","lineLenghProduct");
    inputFromListProducts.setAttribute("value",products.length);
    saveListProductsForm.prepend(inputFromListProducts);

    categories.splice(categories.length-1, 1);
    var inputFromListCategories = document.createElement('input');
    inputFromListCategories.setAttribute("type","hidden");
    inputFromListCategories.setAttribute("name","lineLenghCategory");
    inputFromListCategories.setAttribute("value",categories.length);
    saveListProductsForm.prepend(inputFromListCategories);
    
    products.sort((a,b) => a[0].localeCompare(b[0]));
    products.forEach((product,index)=>{
        var nameProductsList = document.createElement('input');
        nameProductsList.setAttribute("type","hidden");
        nameProductsList.setAttribute("name","lineProduct" + index);
        nameProductsList.setAttribute("value","['" + product[0] + "'," + product[1] + ",'" + product[2] + "','" + product[3] + "']");
        if (product[0].length>0) saveListProductsForm.prepend(nameProductsList);
    });

    categories.sort((a,b) => a[0].localeCompare(b[0]));
    categories.forEach((category,index)=>{
        var nameCategoriesList = document.createElement('input');
        nameCategoriesList.setAttribute("type","hidden");
        nameCategoriesList.setAttribute("name","lineCategory" + index);
        nameCategoriesList.setAttribute("value","['" + category[0] + "','" + category[1] + "']");
        if (category[0].length>0) saveListProductsForm.prepend(nameCategoriesList);
    });
}