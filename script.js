const addBookBtn = document.querySelector('#addBook-btn');
const bookList = document.querySelector('#book-list');
const myLibrary = [];

function clearOut() {
  document.querySelector('.title').value = '';
  document.querySelector('.author').value = '';
  document.querySelector('.pages').value = '';
}

function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className} p-1 mb-1`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const formDiv = document.querySelector('#form-div');
    container.insertBefore(div, formDiv);
    setTimeout(() => document.querySelector('.alert').remove(), 2000)
}

function showBooks(books) {
  const row = document.createElement('tr');
  books.forEach((book) => {
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
  });
  bookList.appendChild(row);
  clearOut();
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const bookTitle = document.querySelector('.title').value;
  const bookAuthor = document.querySelector('.author').value;
  const bookPages = document.querySelector('.pages').value;
  const bookread = document.querySelector('.read').value;

  if (bookTitle === '' || bookAuthor === '' || bookPages === '') {
    showAlert('Please fill in all fields', 'danger');
  } else {
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookread);
    myLibrary.push(newBook);
    showBooks(myLibrary);
    showAlert('Book Added', 'success');
  }
}

addBookBtn.onclick = (e) => {
  e.preventDefault();
  addBookToLibrary();
};

function deleteBook(e) {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    const parent = e.target.parentElement.parentElement;
    parent.remove();
    showAlert('Book Removed', 'success');
  }
}

bookList.addEventListener('click', deleteBook);
