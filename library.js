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
let removeSelector = document.querySelectorAll('.remove');
let readSelector = document.querySelectorAll('.readStatus');

// array to store books
const myLibrary = [];

// constructor
function Book(book, author, pages) {
  this.book = book;
  this.author = author;
  this.pages = pages;
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
    div.classList.add('book');

    let readClass;
    let readText;
    // eslint-disable-next-line no-constant-condition
    if (element.isRead === true) {
      readClass = 'read';
      readText = 'read';
    } else {
      readClass = 'not-read';
      readText = 'not read';
    }

    div.innerHTML = `
    <h2>${element.book}</h2>
    <h3>${element.author}</h3>
    <h4>${element.pages}</h4>
    <button data-key=${count} class="remove"> remove </button>
    <button data-key=${count} class="readStatus ${readClass}"> ${readText} </button>
    `;
    // eslint-disable-next-line no-plusplus
    count++;
    bookContainer.appendChild(div);
  });

  // eslint-disable-next-line prefer-const
  removeSelector = document.querySelectorAll('.remove');
  readSelector = document.querySelectorAll('.readStatus');

  removeSelector.forEach((button) => {
    button.addEventListener('click', () => {
      myLibrary.splice(button.getAttribute('data-key'), 1);
      showBooks();
    });
  });

  readSelector.forEach((button) => {
    button.addEventListener('click', () => {
      console.log();
      if (button.classList.contains('not-read')) {
        button.classList.remove('not-read');
        button.classList.add('read');
        // eslint-disable-next-line no-param-reassign
        button.textContent = 'read';
        myLibrary[(button.getAttribute('data-key'))].isRead = true;
      } else {
        button.classList.remove('read');
        button.classList.add('not-read');
        // eslint-disable-next-line no-param-reassign
        button.textContent = 'not read';
        myLibrary[(button.getAttribute('data-key'))].isRead = false;
      }
    });
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
