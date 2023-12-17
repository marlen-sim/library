const myLibrary = [
    { title: "1984", author: "George Orwell", pages: 265, read: true },
    {
        title: "The Master and Margarita",
        author: "Mikhail Bulgakov",
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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;

    addBookToLibrary(title, author, pages);
    showBookTable();
});

button.addEventListener("click", () => {
    showBookTable();
});

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages, "not read"));
}

function showBookTable() {
    const books = document.querySelector(".books");
    let tableTamplate = `<table class="books__table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
            </tr>
        </thead>
        <tbody class="tbody">

        </tbody>
    </table>`;
    books.innerHTML = tableTamplate;

    const tbody = document.querySelector(".tbody");
    let row = ``;

    myLibrary.forEach((book) => {
        let title = book.title;
        let author = book.author;
        let pages = book.pages;

        row =
            row +
            `
        <tr class="tr">
            <td>${title}</td>
            <td>${author}</td>
            <td>${pages}</td>
        </tr>`;
    });
    tbody.innerHTML = row;
}

// MODAL
const open = document.querySelector(".open-modal");
const close = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

open.addEventListener("click", () => {
    modal.showModal();
});

close.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.close();
    }
});
