function addNewProduct(product, number){
    var product_Li = document.createElement('li');

    product_Li.classList.add('single-product');
    product_Li.classList.add('product'+number);

    product_Li.innerHTML=prepareProductHTML(product, number);

    // Event - select product
    var selectProductBtn = product_Li.querySelector('.select-product-btn');
    var productsList = document.createElement('input');

    selectProductBtn.addEventListener('click', function(){
        console.log(products[this.value],this.value);
        if (products[this.value][2]=="") 
            products[this.value]=[products[this.value][0],products[this.value][1],"btn-success",products[this.value][3]];
        else
            products[this.value]=[products[this.value][0],products[this.value][1],"",products[this.value][3]];
        console.log(products[this.value]);
        console.log(products);
        selectedProduct(this);
        productsList.innerHTML=prepareProductsListHTML();
    });

    // Event - delete product

    // Event - addition

    // Event - reduction


    // Add product to DOM
    productsContainer.prepend(product_Li);
};


function prepareProductHTML(product, number){
    return  '<div class="input-group">' +
		 	'		<span class="input-group-btn">' +
			'				<button class="btn btn-default select-product-btn '+ product[2] +'" value="' + number + '"><i class="fa fa-check"></i></button>' +
			'			</span>' +
			'		' +
			'			<input type="text" class="form-control" placeholder="Nazwa produktu..." value="' + product[0] + '">' +
            ' ' +
			'			<span class="input-group-btn">' +
			'				<button class="btn btn-danger delete-product-btn"><i class="fa fa-times"></i></button>' +
			'			</span>' +
			'		</div>' +
			'		<div class="input-group value">' +
			'				<span class="input-group-btn">' +
			'					<button class="btn  plus-product-btn"><i class="fa fa-plus-square"></i></button>' +
			'				</span>' +
			'			' +
			'				<input type="text" class="form-control" placeholder="0" value="' + product[1] + '">' +
	        ' ' +
			'				<span class="input-group-btn">' +
			'					<button class="btn  minus-product-btn"><i class="fa fa-minus-square"></i></button>' +
			'				</span>' +
			'		</div>';
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
    });
}