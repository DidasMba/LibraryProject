const myLibrary = [];
//constructor function for creating book object 
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
// function to add a new book to the library array
function addBookToLibrary(title, autor, pages) {
    const newBook = new Book(title, autor, pages);
    myLibrary.push(newBook);
  }

  // exemple usage 
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300);
  addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 320);

  console.log(myLibrary); // This will show the array of book objects

// // Function to display books on the page
  function displayBooks(){
    const booksContainer = document.getElementById("books-container"); // Assuming you have a <div> with id "books-container" in your HTML
     
    // Clear the container before adding new books
    booksContainer.innerHTML ="";
    
   //Loop through the library array and create a card for each book
   myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card"); // Apply styles using CSS

}



