document.addEventListener("DOMContentLoaded", displayBooks()); //event listener forloaded document



function displayBooks(){  // callback function for domcontent loaded event
    let displayBlock = document.getElementById("display-books");
    fetch("https://www.anapioficeandfire.com/api/books") // fetch requett to the api
    .then(response => response.json())
    .then(function(data){
        for(book of data){
            let bookContainer = document.createElement("h2");
            let text = document.createElement("textarea")
            text.setAttribute("placeholder", "optional comments"); // textarea placeholder
            text.className = "comments";
            bookContainer.textContent = `${book.name} has ${book.numberOfPages} pages`;
            bookContainer.appendChild(text);
            displayBlock.appendChild(bookContainer);
        }
    })
}


submitForm = document.getElementById("input-form"); // getting the form element
function informUser(){ // callback function for the email submission event listener
    alert("Thank you for subscribing to our monthly newsletter");
}

const images = document.getElementsByTagName("img")
function bigImg(x) { // resizing images mouse over event callback
    x.style.height = "250px";
    x.style.width = "220px";
  }
  
function normalImg(x){ //normalising images mouseout event callback
    x.style.height = "200px";
    x.style.width = "200px";
}



