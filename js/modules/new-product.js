function addNewProduct(product, number){
    var product_Li = document.createElement('li');

    product_Li.classList.add('single-product');
    product_Li.classList.add('product'+number);

    product_Li.innerHTML=prepareProductHTML(product, number);

    // Event - select product
    var selectProductBtn = product_Li.querySelector('.select-product-btn');


    selectProductBtn.addEventListener('click', function(){
        // console.log(this);
        // console.log(products[this.value],this.value);
        if (products[this.value][2]=="") 
            products[this.value][2]="btn-success";
        else
            products[this.value][2]="";
        // console.log(products[this.value]);
        // console.log(products);
        // selectedProduct(this);
        this.classList.toggle('btn-success');
        // productsList.innerHTML=prepareProductsListHTML();
    });

    // Event - delete product

    // Event - addition
    var additionBtn = product_Li.querySelector('.plus-product-btn');
    additionBtn.addEventListener('click', function(){
        var valueThis = document.querySelector('#add'+number);
        var state=parseInt(valueThis.getAttribute('value'));
        if (state < 99) valueThis.setAttribute('value',state+1);
        products[this.value][1]=valueThis.value;
        if (products[this.value][2]=="") {
        products[this.value][2]="btn-success";
        selectProductBtn.classList.toggle('btn-success');
        };
        saveList();
    });


    // Event - reduction
    var reductionBtn = product_Li.querySelector('.minus-product-btn');
    reductionBtn.addEventListener('click', function(){
        var valueThis = document.querySelector('#add'+number);
        var state=parseInt(valueThis.getAttribute('value'));
        if (valueThis.value==1) {
            products[this.value][2]="";
            selectProductBtn.classList.toggle('btn-success');
        };
        if (state > 0) valueThis.setAttribute('value',state-1);
        products[this.value][1]=valueThis.value;
        saveList();
    });

    // Add product to DOM
    productsContainer.prepend(product_Li);
};


function prepareProductHTML(product, number){
    return  '<div class="input-group">' +
		 	'	<span class="input-group-btn">' +
			'		<button class="btn btn-default select-product-btn '+ product[2] +'" value="' + number + '"><i class="fa fa-check"></i></button>' +
			'	</span>' +
			'	<input type="text" class="form-control" placeholder="Nazwa produktu..." value="' + product[0] + '" disabled>' +
			'	<span class="input-group-btn">' +
			'		<button class="btn btn-danger delete-product-btn" value="' + number + '"><i class="fa fa-times"></i></button>' +
			'	</span>' +
			'</div>' +
			'<div class="input-group posicion' + number + '">' +
			'	<span class="input-group-btn">' +
			'		<button class="btn  plus-product-btn" value="' + number + '"><i class="fa fa-plus-square"></i></button>' +
			'	</span>' +
			'	<input type="text" class="form-control" id="add' + number + '" placeholder="0" value="' + product[1] + '" disabled>' +
			'	<span class="input-group-btn">' +
			'		<button class="btn  minus-product-btn" value="' + number + '"><i class="fa fa-minus-square"></i></button>' +
			'	</span>' +
            '</div>';
}

function addProductToList(){
    //on submint
    newProductForm.addEventListener('submit',function(event){
        event.preventDefault();
        var nameProduct = this.querySelector('input').value;
        if (nameProduct){
            var newProduct = [nameProduct, 1, 'btn-success', 'Kasi'];
            console.log(newProduct);
            // products.unshift(newProduct);
            products.push(newProduct);
            console.log(products);
            addNewProduct(newProduct,products.length-1);
        };
    });
}

function saveListProducts(){
    saveListProductsForm.addEventListener('submit',function(event){
        // event.preventDefault();
        var buttonFrom = document.querySelector('#loadingZapis');
        buttonFrom.classList.add('element-is-busy');
        buttonFrom.disabled = true;    
        saveList();
    });
}

function saveList(){
    var inputFromListProducts = document.createElement('input');
    inputFromListProducts.setAttribute("type","hidden");
    inputFromListProducts.setAttribute("name","liniaLengh");
    inputFromListProducts.setAttribute("value",products.length);
    saveListProductsForm.appendChild(inputFromListProducts);
    products.forEach((product,number)=>{
        var nameProductsList = document.createElement('input');
        nameProductsList.setAttribute("type","hidden");
        nameProductsList.setAttribute("name","linia"+number);
        // console.log(product);
        nameProductsList.setAttribute("value","['"+product[0]+"',"+product[1]+",'"+product[2]+"','"+product[3]+"']");
        // console.log(nameProductsList);
        saveListProductsForm.appendChild(nameProductsList);
    });
}