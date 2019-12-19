function addNewCategory(category, index){

    var category_Li = document.createElement('li');

    category_Li.innerHTML = '<a href="#" value="' + index + '">' + category[0] + '</a>';
    if (index==categories.length-1) 
        category_Li.innerHTML = '<a href="#" style="font-weight: bold;" value="' + index + '">' + category[0] + '</a>';


    // Event - select category
    var selectCategory = category_Li.querySelector('a');
    selectCategory.addEventListener('click', function(event){
        event.preventDefault();
        categoryName = categories[index][0];
        h2.innerHTML = textH2 + categoryName;
        if (event.target.style.color=="red") {
            event.target.style.color = "";
            event.target.style.fontWeight = "";
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
           categories[index] = ["",""];
       }
       event.target.style.color = "red";
       event.target.style.fontWeight = "bold";
        console.log(event.target.style);
        return false;
    }, false);

    // Add product to DOM
    // categoriesContainer.prepend(category_Li);
    if (category[0]!="") categoriesContainer.appendChild(category_Li);
};


function addCategoryToList(){
    newCategoryForm.addEventListener('submit',function(event){
        event.preventDefault();
        var nameCategory = this.querySelector('input').value;
        if (nameCategory){
            nameCategory=trim(nameCategory);
            var newCategory = [nameCategory, nameCategory];
            categories.unshift(newCategory);
            showCategories();
            this.querySelector('input').value="";
            categoryName = nameCategory;
            h2.innerHTML = textH2 + categoryName;
            showProducts();
        };
    });
}