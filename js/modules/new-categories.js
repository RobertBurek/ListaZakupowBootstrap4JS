function showCategories(){
var linkA1 = document.querySelector('#warzywa');
    linkA1.addEventListener('click', function(event){
        console.log(event.target);
    });
    var linkA2 = document.querySelector('#napoje');
    linkA2.addEventListener('click', function(event){
        console.log(event.target);
    });
}