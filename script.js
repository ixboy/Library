const newBookBtn = document.querySelector('#newBook-btn');
const bookForm = document.querySelector('#form');
const addBookBtn = document.querySelector('#addBook-btn');
newBookBtn.onclick = () => {
  bookForm.style.display = 'block';
};

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  // this.read = read;
}

function addBookToLibrary() {
  const bookTitle = document.querySelector('.title').value;
  const bookAuthor = document.querySelector('.author').value;
  const bookPages = document.querySelector('.pages').value;

  const newBook = new Book(bookTitle, bookAuthor, bookPages);

  myLibrary.push(newBook);
}

addBookBtn.onclick = () => {
  bookForm.style.display = 'none';
  addBookToLibrary();
};
