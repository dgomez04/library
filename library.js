/* eslint-disable no-unused-vars */

// creating DOM objects to control pop-up
const open = document.getElementById('open');
const submit = document.getElementById('submit');
const modalcontainer = document.getElementById('modalcontainer');

// creating DOM objects for input values.
const bookInput = document.getElementById('book');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');

// DOM object for bookcontainer
const bookContainer = document.getElementById('bookcontainer');

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

// for each element in the array

function showBooks() {
  let count = 0;
  bookContainer.innerHTML = '';

  myLibrary.forEach((element) => {
    const div = document.createElement('div');
    div.setAttribute('data-key', count);
    // eslint-disable-next-line no-plusplus
    count++;
    div.classList.add('book');
    div.innerHTML = `
    <h1>${element.book}</h1>
    <h3>${element.author}</h3>
    <h4>${element.pages}</h4>
    <button class="btn-red"> remove </button
    `;
    bookContainer.appendChild(div);
  });
}

// eventListeners for open & close buttons

open.addEventListener('click', () => {
  modalcontainer.classList.add('show');
});

submit.addEventListener('click', () => {
  modalcontainer.classList.remove('show');
  addBookToLibrary();
  showBooks();
});
