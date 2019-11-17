function addNewProduct(product){
    var product_Li = document.createElement('li');

    product_Li.classList.add('single-product');
    product_Li.innerHTML=prepareProductHTML(product);

    // Add product to DOM
    productsContainer.appendChild(product_Li);
};

function prepareProductHTML(product){
    return  '<div class="input-group">' +
		 	'		<span class="input-group-btn">' +
			'				<button class="btn btn-default toggle-complete-btn '+ product[2] +'"><i class="fa fa-check"></i></button>' +
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