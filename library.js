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



