function showCategories() {
    categoriesContainer.innerHTML = "";
    categories.forEach((category,number)=>{
        addNewCategory(category,number);
    });
}

