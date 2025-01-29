// const myLibrary = [];
const main = document.getElementById("main");
const addBookBtn = document.getElementById("add-book-btn");
const addBookDialog = document.getElementById("add-book-dialog");
const saveBookBtn = document.getElementById("save-book-btn");
const titleInput = document.getElementById("title-input");
const pagesInput = document.getElementById("pages-input");
const authorInput = document.getElementById("author-input");
const readCheckbox = document.getElementById("read-checkbox");
const newBookForm = document.getElementById("new-book-form");

//original code
// function Book(title, author, pages, read = false) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;

//   this.info = () => {
//     return `${this.title} by ${this.author}, ${this.pages} pages. ${
//       read ? "Already read." : "Not read yet"
//     }`;
//   };
// }

// function AddBookToLibrary(library, title, author, pages, read) {
//   const newBook = new Book(title, author, pages, read);
//   library.push(newBook);
// }

// AddBookToLibrary(myLibrary, "The Hobbit", "J.R.R. Tolkien", 256, true);

// AddBookToLibrary(
//   myLibrary,
//   "The Name of the Wind",
//   "Patrick Rothfuss",
//   662,
//   true
// );

// AddBookToLibrary(myLibrary, "Das Parfum", "Patrick Süskind", 319, true);

// function UpdateBookDisplay() {
//   main.innerHTML = "";
//   for (book of myLibrary) {
//     const bookId = myLibrary.indexOf(book);
//     const html = `<div class="card"><header><h2>${
//       book.title
//     }</h2></header><div class="container"><span class="author">${
//       book.author
//     }</span><span class="pages">${book.pages}</span><span class="read">${
//       book.read ? "Already read." : "Not read yet"
//     }</span>
//     <button class="delete-btn" id="${bookId}">Delete Book</button>
//     <button class="toggle-read-btn" id="${bookId}">${
//       book.read ? "Mark as unread" : "Mark as read"
//     }</button></div>`;
//     main.innerHTML += html;
//   }
//   const deleteBtns = document.querySelectorAll(".delete-btn");
//   const toggleReadBtns = document.querySelectorAll(".toggle-read-btn");
//   for (btn of toggleReadBtns) {
//     btn.addEventListener("click", ToggleRead);
//   }
//   for (btn of deleteBtns) {
//     btn.addEventListener("click", DeleteBook);
//   }
// }

// function DeleteBook(e) {
//   myLibrary.splice(e.target.id, 1);
//   UpdateBookDisplay();
// }

// function ToggleRead(e) {
//   myLibrary[e.target.id].read = !myLibrary[e.target.id].read;
//   UpdateBookDisplay();
// }

// addBookBtn.addEventListener("click", () => addBookDialog.showModal());
// saveBookBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   AddBookToLibrary(
//     myLibrary,
//     titleInput.value,
//     authorInput.value,
//     pagesInput.value,
//     readCheckbox.checked
//   );
//   newBookForm.reset();
//   addBookDialog.close();
//   UpdateBookDisplay();
// });

// UpdateBookDisplay();

class Library {
  constructor() {
    this.library = [];
  }

  deleteBook(e) {
    this.library.splice(e.target.id, 1);
    UpdateBookDisplay();
  }

  addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    this.library.push(newBook);
  }

  toggleRead(e) {
    console.log(e);
    this.library[e.target.id].read = !this.library[e.target.id].read;
    UpdateBookDisplay();
  }
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages. ${
      read ? "Already read." : "Not read yet"
    }`;
  };
}

myLibrary = new Library();

function UpdateBookDisplay() {
  main.innerHTML = "";
  for (book of myLibrary.library) {
    const bookId = myLibrary.library.indexOf(book);
    const html = `<div class="card"><header><h2>${
      book.title
    }</h2></header><div class="container"><span class="author">${
      book.author
    }</span><span class="pages">${book.pages}</span><span class="read">${
      book.read ? "Already read." : "Not read yet"
    }</span>
    <button class="delete-btn" id="${bookId}">Delete Book</button>
    <button class="toggle-read-btn" id="${bookId}">${
      book.read ? "Mark as unread" : "Mark as read"
    }</button></div>`;
    main.innerHTML += html;
  }
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const toggleReadBtns = document.querySelectorAll(".toggle-read-btn");
  for (btn of toggleReadBtns) {
    btn.addEventListener("click", (e) => {
      myLibrary.toggleRead(e);
    });
  }
  for (btn of deleteBtns) {
    btn.addEventListener("click", (e) => {
      myLibrary.deleteBook(e);
    });
  }
}

addBookBtn.addEventListener("click", () => addBookDialog.showModal());
saveBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  myLibrary.addBook(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readCheckbox.checked
  );
  newBookForm.reset();
  addBookDialog.close();
  UpdateBookDisplay();
});

myLibrary.addBook("The Hobbit", "J.R.R. Tolkien", 256, true);
UpdateBookDisplay();
