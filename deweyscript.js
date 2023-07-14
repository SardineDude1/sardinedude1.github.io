document.addEventListener("DOMContentLoaded", function() {
  var books = document.querySelectorAll(".book");
  var shelves = document.querySelectorAll(".shelf");

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

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
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

  function drop(e) {
    e.preventDefault();
    var bookId = e.dataTransfer.getData("text/plain");
    var book = document.getElementById(bookId);
    var shelf = this;

    if (shelf.contains(book)) {
      return;
    }

    shelf.appendChild(book);
    this.classList.remove("highlight");
  }
});
