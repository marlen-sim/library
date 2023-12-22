const myLibrary = [
    { title: "1984", author: "George Orwell", pages: 265, read: "read" },
    {
        title: "The Master and Margarita",
        author: "Mikhail Bulgakov",
        pages: 412,
        read: "unread",
    },
];

function Book(title, author, pages, read, toggleReadStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
    this.toggleReadStatus = function () {
        this.read = this.read === "unread" ? "read" : "unread";
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

function addBookToLibrary(title, author, pages, read = "unread") {
    myLibrary.push(new Book(title, author, pages, read));
}

function renderTable() {
    const books = document.querySelector(".books");
    let tableTamplate = `<table class="books__table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Read status</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody class="tbody">

        </tbody>
    </table>`;
    books.innerHTML = tableTamplate;
}

renderTable();

function showBookTable() {
    const tbody = document.querySelector(".tbody");

    let rowHTML = "";

    myLibrary.forEach((book, index) => {
        let title = book.title;
        let author = book.author;
        let pages = book.pages;
        let read = book.read;

        rowHTML += `
        <tr class="tr" data-index="${index}">
            <td>${title}</td>
            <td>${author}</td>
            <td>${pages}</td>
            <td class="js-read">${read}</td>
            <td>
                <button class="toggle-btn js-toggle-btn" data-edit="${index}">Edit</button>
            </td>
            <td>
                <button class="delete-btn js-delete-btn" data-delete="${index}">Delete</button>
            </td>
        </tr>`;
    });

    tbody.innerHTML = rowHTML;

    document.querySelectorAll(".js-delete-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.delete;
            console.log(index);
            deleteItem(index);
            showBookTable();
        });
    });

    function deleteItem(index) {
        myLibrary.splice(index, 1);
    }

    document.querySelectorAll(".js-toggle-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.edit;
            const book = myLibrary[index];
            console.log(book);
            // Toggle the read status for the specific book using the prototype method
            book.toggleReadStatus();

            // After toggling, update the table
            showBookTable();
        });
    });
}

showBookTable();

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
