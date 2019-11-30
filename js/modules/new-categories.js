function addNewCategory(category, index){

    var category_Li = document.createElement('li');

    category_Li.innerHTML='<a href="#" value="' + index + '">' + category[0] + '</a>';
    if (index==categories.length-1) 
        category_Li.innerHTML='<a href="#" style="font-weight: bold;" value="' + index + '">' + category[0] + '</a>';


    // Event - select category
    var selectCategory = category_Li.querySelector('a');
    selectCategory.addEventListener('click', function(event){
        event.preventDefault();
        categoryName = categories[index][0];
        h2.innerHTML='Lista zakupów, kategoria : ' + categoryName;
        if (event.target.style.color=="red") {
            event.target.style.color="";
            event.target.style.fontWeight="";
       }
        showProducts();
    });

    // right click category
    selectCategory.addEventListener('contextmenu', function(event) {
        event.preventDefault();
       console.log("right click w " + categories[index][0]);
       console.log(event.target);
       if (event.target.style.color=="red") {
            var liToDelete = this.closest('li');
            liToDelete.classList.toggle('hidden');
           categories[index]=["",""];
       }
       event.target.style.color="red";
       event.target.style.fontWeight="bold";
        console.log(event.target.style);
        return false;
    }, false);




    // Event - delete product
    // var deleteProductBtn = product_Li.querySelector('.delete-product-btn');
    // deleteProductBtn.addEventListener('click',function(){
    //     var liToDelete = this.closest('li');
    //     // console.log(liToDelete);
    //     liToDelete.classList.toggle('hidden');
    //     products[index][0]="";products[index][1]="";products[index][2]="";products[index][3]="";
    //     // saveList();
    // })

    // Event - addition
    // var additionBtn = product_Li.querySelector('.plus-product-btn');


    // additionBtn.addEventListener('click', function(){
    //     additionButton();
    // });

    // function additionButton(){
    //     var valueThis = document.querySelector('#add'+index);
    //     var state=parseInt(valueThis.getAttribute('value'));
    //     if (state < 99) valueThis.setAttribute('value',state+1);
    //     // console.log(this.value,index);
    //     products[index][1]=valueThis.value;
    //     if (products[index][2]=="") {
    //     products[index][2]="btn-success";
    //     selectProductBtn.classList.toggle('btn-success');
    //     };
    //     // saveList();
    // };

    // Event - reduction
    // var reductionBtn = product_Li.querySelector('.minus-product-btn');
    // reductionBtn.addEventListener('click', function(){
    //     var valueThis = document.querySelector('#add'+index);
    //     var state=parseInt(valueThis.getAttribute('value'));
    //     if ((valueThis.value==1)&&(products[index][2]=="btn-success")){
    //         products[index][2]="";
    //         selectProductBtn.classList.toggle('btn-success');
    //     };
    //     if ((valueThis.value>1)&&(products[index][2]=="")){
    //         products[index][2]="btn-success";
    //         selectProductBtn.classList.toggle('btn-success');
    //     };
    //     if (state > 0) valueThis.setAttribute('value',state-1);
    //     products[index][1]=valueThis.value;
    //     // saveList();
    // });

    // Add product to DOM
    // categoriesContainer.prepend(category_Li);
    if (category[0]!="") categoriesContainer.appendChild(category_Li);
    // console.log(categoriesContainer);
};


// function prepareCategoryHTML(category, index){
//     return  '<a href="#" value="' + index + '">' + category[1] + '</a>';
// }

function addCategoryToList(){
    newCategoryForm.addEventListener('submit',function(event){
        event.preventDefault();
        var nameCategory = this.querySelector('input').value;
        if (nameCategory){
            var newCategory = [nameCategory, nameCategory];
            categories.push(["Wszystkie","Wszystkie"]);
            categories[categories.length-2]=newCategory;
            showCategories();
            this.querySelector('input').value="";
            categoryName=nameCategory;
            h2.innerHTML='Lista zakupów, kategoria : ' + categoryName;
            showProducts();
        };
    });
}