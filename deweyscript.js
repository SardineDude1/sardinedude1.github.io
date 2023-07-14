document.addEventListener("DOMContentLoaded", function() {
  var books = document.querySelectorAll(".book");
  var shelves = document.querySelectorAll(".shelf");

  // Add event listeners to enable dragging and dropping
  books.forEach(function(book) {
    book.addEventListener("dragstart", dragStart);
    book.addEventListener("dragend", dragEnd);
  });

  shelves.forEach(function(shelf) {
    shelf.addEventListener("dragover", dragOver);
    shelf.addEventListener("dragenter", dragEnter);
    shelf.addEventListener("dragleave", dragLeave);
    shelf.addEventListener("drop", drop);
  });

  // Functions for dragging and dropping
  function dragStart() {
    this.classList.add("dragging");
  }

  function dragEnd() {
    this.classList.remove("dragging");
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add("highlight");
  }

  function dragLeave() {
    this.classList.remove("highlight");
  }

  function drop() {
    var bookId = document.querySelector(".dragging").id;
    var shelfId = this.id;
    var bookCallNumber = bookId.split("-")[1];
    var shelfCallNumber = shelfId.split("-")[1];

    if (bookCallNumber.startsWith(shelfCallNumber)) {
      this.appendChild(document.querySelector(".dragging"));
    }
    this.classList.remove("highlight");
  }
});
