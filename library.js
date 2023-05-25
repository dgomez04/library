/* eslint-disable no-unused-vars */

// creating DOM objects to control pop-up
const open = document.getElementById('open');
const close = document.getElementById('close');
const modalcontainer = document.getElementById('modalcontainer');

// array to store books
const myLibrary = [];

// eventListeners for open & close buttons

open.addEventListener('click', () => {
  modalcontainer.classList.add('show');
});

close.addEventListener('click', () => {
  // TODO: run function to add book
  modalcontainer.classList.remove('show');
});

// constructor
function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

// function to add book to array

function addBookToLibrary() {

}
