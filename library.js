/* eslint-disable no-unused-vars */

// creating DOM objects to control pop-up
const open = document.getElementById('open');
const submit = document.getElementById('submit');
const modalcontainer = document.getElementById('modalcontainer');

// creating DOM objects for input values.
const bookInput = document.getElementById('book');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');

// array to store books
const myLibrary = [];

// constructor
function Book(book, author, pages) {
  this.book = book;
  this.author = author;
  this.pages = pages;
  // eslint-disable-next-line no-undef
  isRead = false;
}

// function to add book to array

function addBookToLibrary() {
  myLibrary.push(new Book(bookInput.value, authorInput.value, pagesInput.value));

  // clear values of input tags
  bookInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
}

// eventListeners for open & close buttons

open.addEventListener('click', () => {
  modalcontainer.classList.add('show');
});

submit.addEventListener('click', () => {
  modalcontainer.classList.remove('show');
  addBookToLibrary();
});
