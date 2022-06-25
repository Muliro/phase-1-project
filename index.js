








document.addEventListener("DOMContentLoaded", displayBooks()); //event listener forloaded document



function displayBooks(){
    let displayBlock = document.getElementById("display-books");
    fetch("https://www.anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(function(data){
        for(book of data){
            let bookContainer = document.createElement("h2");
            let buttons = document.createElement("input")
            buttons.setAttribute("type", "button");
            buttons.className = "info-button";
            bookContainer.textContent = `${book.name} has ${book.numberOfPages} pages`;
            bookContainer.appendChild(buttons);
            displayBlock.appendChild(bookContainer);
        }
    })
}




submitForm = document.getElementById("input-form"); // getting the form element


submitForm.addEventListener("submit", informUser());  // event listener for email submit form

function informUser(){ // callback function for the email submission
    alert("Thank you for subscribing to our monthly newletter");
}
