// Selectores
const formAuthor = document.getElementById("formAuthor");
const nameAuthor = document.getElementById("name");
const ageAuthor = document.getElementById("age");
const formBooks = document.getElementById("formBooks");
const nameBook = document.getElementById("nameBook");
const dateBook = document.getElementById("dateBook");
const authorBook = document.getElementById("authorBook");
const listBooks = document.getElementById("listBooks");

const URLAuthors = "http://localhost:3000/authors";
const URLBooks = "http://localhost:3000/books";

// Eventos
document.addEventListener("DOMContentLoaded", () => {
    loadSelectAuthor();
    getBooks();
});

formAuthor.addEventListener("submit", (event) => {
    event.preventDefault();
    createAuthor();
});

formBooks.addEventListener("submit", (event) => {
    event.preventDefault();
    createBook();
});

// Función para obtener y mostrar libros
async function getBooks() {
    const response = await fetch(URLBooks);
    const books = await response.json();
    
    listBooks.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

    const authorResponses = await fetch(URLAuthors);
    const authors = await authorResponses.json();
    const authorsMap = new Map(authors.map(author => [author.id, author.name]));

    books.forEach(book => {
        const authorName = authorsMap.get(book.authorId) || 'Unknown Author';
        const li = document.createElement('li');
        li.innerHTML = `
            Name: ${book.name}, Date: ${book.date}, Author: ${authorName}
            <button onclick="deleteBook('${book.id}')">Delete</button>
        `;
        listBooks.appendChild(li);
    });
}

// Función para crear un libro
async function createBook() {
    const newBook = {
        name: nameBook.value,
        date: dateBook.value,
        authorId: authorBook.value
    };

    await fetch(URLBooks, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
    });

    getBooks(); // Refresh the book list
}

// Función para cargar el select con los autores
async function loadSelectAuthor() {
    const response = await fetch(URLAuthors);
    const authors = await response.json();
    
    authorBook.innerHTML = '<option selected value="">Selecciona un autor</option>'; // Limpiar opciones antes de agregar nuevas
    authors.forEach(author => {
        const option = document.createElement("option");
        option.value = author.id;
        option.textContent = author.name;
        authorBook.appendChild(option);
    });
}

// Función para crear un autor
async function createAuthor() {
    await fetch(URLAuthors, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: nameAuthor.value, age: ageAuthor.value })
    });

    loadSelectAuthor(); // Refresh the author select
}

// Función para eliminar un libro
async function deleteBook(bookId) {
    await fetch(`${URLBooks}/${bookId}`, {
        method: "DELETE"
    });

    getBooks(); // Refresh the book list
}

// Función para eliminar un autor y sus libros
async function deleteAuthor(authorId) {
    // Delete books associated with the author
    const response = await fetch(`${URLBooks}?authorId=${authorId}`);
    const books = await response.json();
    const deleteBookPromises = books.map(book => fetch(`${URLBooks}/${book.id}`, {
        method: "DELETE"
    }));
    await Promise.all(deleteBookPromises);

    // Delete the author
    await fetch(`${URLAuthors}/${authorId}`, {
        method: "DELETE"
    });

    loadSelectAuthor(); // Refresh the author select
    getBooks(); // Refresh the book list
}
