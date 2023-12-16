const myLibrary = [
    { title: "1984", author: "Mikhail Bulgakov", pages: 300, read: true },
    {
        title: "The Master and Margarita",
        author: "George Orwell",
        pages: 412,
        read: true,
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
}

const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const inputTitle = document.querySelector(".input-title");
const inputAuthor = document.querySelector(".input-author");
const inputPages = document.querySelector(".input-pages");
const form = document.querySelector(".form");
const books = document.querySelector(".book");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;

    addBookToLibrary(title, author, pages);
    console.log(myLibrary);
});

button.addEventListener("click", () => {
    console.log(myLibrary);
    showBook();
});

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages, "not read"));
}

function showBook() {
    myLibrary.forEach((book) => {
        console.log(book.title);
    });
}
showBook();
