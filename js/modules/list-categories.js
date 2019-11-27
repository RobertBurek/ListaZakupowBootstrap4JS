function showCategories() {
    categoriesContainer.innerHTML="";
    // categories = categories.sort();
    // console.log(categories);
    // categories.push(["Wszystkie","Wszystkie"]);
    // categories = categories.reverse()
    categories.forEach((category,number)=>{
        addNewCategory(category,number);
    });
}

// Delete category
// function deletedCategory(category){
//     category.classList.toggle('');
// }

console.log(categories);