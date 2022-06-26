



document.addEventListener("DOMContentLoaded", displayBooks()); //event listener forloaded document



function displayBooks(){
    let displayBlock = document.getElementById("display-books");
    fetch("https://www.anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(function(data){
        for(book of data){
            let bookContainer = document.createElement("h2");
            let text = document.createElement("textarea")
            text.setAttribute("placeholder", "optional comments");
            text.className = "comments";
            bookContainer.textContent = `${book.name} has ${book.numberOfPages} pages`;
            bookContainer.appendChild(text);
            displayBlock.appendChild(bookContainer);
        }
    })
}


submitForm = document.getElementById("input-form"); // getting the form element
submitForm.addEventListener("click", informUser());  // event listener for email submit form
function informUser(){ // callback function for the email submission
    alert("Thank you for subscribing to our monthly newletter");
}

const images = document.getElementsByTagName("img")
function bigImg(x) { // resizing images
    x.style.height = "300px";
  }
  
function normalImg(x){ //normalising images
    x.style.height = "200px"
}



