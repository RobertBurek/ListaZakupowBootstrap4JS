function addNewProduct(product, number){
    var product_Li = document.createElement('li');
    // var productsContainer_Li = document.querySelector('.products-container ul il');
    // console.log(product_Li);
    // console.log(productsContainer_Li);
    product_Li.classList.add('single-product');
    product_Li.classList.add('product'+number);
    // console.log();
    product_Li.innerHTML=prepareProductHTML(product, number);

    // Event - select product
    var selectProductBtn = product_Li.querySelector('.select-product-btn');

    selectProductBtn.addEventListener('click', function(){
        console.log(products[this.value],this.value);
        if (products[this.value][2]=="") 
            products[this.value]=[products[this.value][0],products[this.value][1],"btn-success",products[this.value][3]];
        else
            products[this.value]=[products[this.value][0],products[this.value][1],"",products[this.value][3]];
        console.log(products[this.value]);
        console.log(products);
        selectedProduct(this);
    });

    // Add product to DOM
    productsContainer.prepend(product_Li);
    // productsContainer.insertBefore(product_Li,productsContainer_Li);
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