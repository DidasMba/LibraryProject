// Define an array to store book objects
const myLibrary = [];

// Constructor function for creating book objects
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Function to add a new book to the library array
function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

// Example usage
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 320);

console.log(myLibrary); // This will show the array of book objects


// Function to display books on the page
function displayBooks() {
    const booksContainer = document.getElementById("books-container"); // Assuming you have a <div> with id "books-container" in your HTML
  
    // Clear the container before adding new books
    booksContainer.innerHTML = "";
  
    // Loop through the library array and create a card for each book
    myLibrary.forEach((book, index) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card"); // Apply styles using CSS
  
      // Populate the card with book information
      bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <button class="remove-button" data-index="${index}">Remove</button>
      `;
  
      // Add the card to the container
      booksContainer.appendChild(bookCard);
  
      // Add an event listener to the remove button
      const removeButton = bookCard.querySelector(".remove-button");
      removeButton.addEventListener("click", () => {
        removeBook(index);
        displayBooks(); // Refresh the display after removing a book
      });
    });
  }
  
  // Function to remove a book from the library array
  function removeBook(index) {
    myLibrary.splice(index, 1);
  }
  
  // Example usage
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300);
  addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 320);
  addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 320);
  // Display the books on the page
  displayBooks();


  // add form submit
  const newBookButton = document.getElementById("new-book-button");
  const newBookDialog = document.getElementById("new-book-dialog");
  const newBookForm = document.getElementById("new-book-form");

  newBookButton.addEventListener("click", () => {
    newBookDialog.showModal();
  });

  // Submit 
  newBookForm.removeEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission
  
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
  
    // Call your function to add the book to the library
    addBookToLibrary(title, author, pages);
  
    newBookDialog.close(); // Close the dialog after adding the book
    displayBooks(); // Refresh the book display
});


  
  


  
  
  
  
  

