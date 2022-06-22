
document.addEventListener("DOMContentLoaded", displayBooks());

function displayBooks(){
    let displayBlock = document.getElementById("display-books");
    console.log("displays books from the api");
    fetch("https://www.anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(function(data){
        for(book of data){
            console.log(book.name);
            let bookContainer = document.createElement("h2");
            bookContainer.textContent = book.name;
            displayBlock.appendChild(bookContainer);
        }
    })
}