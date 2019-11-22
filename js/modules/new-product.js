function addNewProduct(product, index){
    var product_Li = document.createElement('li');

    product_Li.classList.add('single-product');
    product_Li.classList.add('product'+index);

    product_Li.innerHTML=prepareProductHTML(product, index);

    // console.log(document.querySelector('#warzywa'));

    // var linkA1 = document.querySelector('#warzywa');
    // linkA1.addEventListener('click', function(event){
    //     console.log(event);
    // });

    // Event - select product
    var selectProductBtn = product_Li.querySelector('.select-product-btn');


    selectProductBtn.addEventListener('click', function(){
        if (products[index][2]=="") 
            products[index][2]="btn-success";
        else
            products[index][2]="";
        this.classList.toggle('btn-success');
        // console.log(products[index][1]);
        // console.log(this.value,index);
        if (products[index][1]==0) additionButton();
    });

    // Event - delete product

    // Event - addition
    var additionBtn = product_Li.querySelector('.plus-product-btn');


    additionBtn.addEventListener('click', function(){
        additionButton();
    });

    function additionButton(){
        var valueThis = document.querySelector('#add'+index);
        var state=parseInt(valueThis.getAttribute('value'));
        if (state < 99) valueThis.setAttribute('value',state+1);
        // console.log(this.value,index);
        products[index][1]=valueThis.value;
        if (products[index][2]=="") {
        products[index][2]="btn-success";
        selectProductBtn.classList.toggle('btn-success');
        };
        saveList();
    };




    // Event - reduction
    var reductionBtn = product_Li.querySelector('.minus-product-btn');
    reductionBtn.addEventListener('click', function(){
        var valueThis = document.querySelector('#add'+index);
        var state=parseInt(valueThis.getAttribute('value'));
        if (valueThis.value==1) {
            if (products[index][2]=="btn-success"){
            products[index][2]="";
            selectProductBtn.classList.toggle('btn-success');
            };
        };
        if (state > 0) valueThis.setAttribute('value',state-1);
        products[index][1]=valueThis.value;
        saveList();
    });

    // Add product to DOM
    productsContainer.prepend(product_Li);
};


function prepareProductHTML(product, index){
    return  '<div class="input-group">' +
		 	'	<span class="input-group-btn">' +
			'		<button class="btn btn-default select-product-btn '+ product[2] +'" value="' + index + '"><i class="fa fa-check"></i></button>' +
			'	</span>' +
			'	<input type="text" class="form-control" placeholder="Nazwa produktu..." value="' + product[0] + '" disabled>' +
			'	<span class="input-group-btn">' +
			'		<button class="btn btn-danger delete-product-btn" value="' + index + '"><i class="fa fa-times"></i></button>' +
			'	</span>' +
			'</div>' +
			'<div class="input-group input-group-sm posicion' + index + '">' +
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
    products.forEach((product,index)=>{
        var nameProductsList = document.createElement('input');
        nameProductsList.setAttribute("type","hidden");
        nameProductsList.setAttribute("name","linia"+index);
        // console.log(product);
        nameProductsList.setAttribute("value","['"+product[0]+"',"+product[1]+",'"+product[2]+"','"+product[3]+"']");
        // console.log(nameProductsList);
        saveListProductsForm.appendChild(nameProductsList);
    });
}