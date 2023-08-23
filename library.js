const myLibrary = [];
//constructor function for creating book object 
function Book(title, autor, pages){
 this.title = title;
 this.autor = autor;
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

  console.log(myLibrary);
  


