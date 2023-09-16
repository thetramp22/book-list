
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function addBookToList(book) {
    myBookList.push(book);
}

const myBookList = [{title : 'book', author : 'writer', pages : 234, read : false}, {title : 'book', author : 'writer', pages : 234, read : true}];

const bookGrid = document.getElementById("book-grid");
const addBookModal = document.getElementById('add-book-modal');
const addBookBtn = document.getElementById('add-book-btn');
const submitBtn = document.getElementById('submit-book-form');
const closeBtn = document.getElementById('close');

addBookBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);
submitBtn.addEventListener('click', submitNewBook);

function getBookInput() {
    const title = document.getElementById('new-title').value;
    const author = document.getElementById('new-author').value;
    const pages = document.getElementById('new-pages').value;
    const read = document.getElementById('new-read').checked;
    return new Book(title, author, pages, read);
}

function submitNewBook(e) {
    e.preventDefault();
    const newbook = getBookInput();

    addBookToList(newbook);
    displayBooks(myBookList);
    closeModal();
}

function displayBooks(myBookList) {
    resetBookGrid();
    for(let book of myBookList) {
        createBookCard(book);
    }
}

function resetBookGrid() {
    bookGrid.innerHTML = '';
}

function createBookCard(book) {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');

    bookCard.classList.add('book-card');

    title.textContent = `${book.title}`;
    author.textContent = `Written by ${book.author}`;
    pages.textContent = `${book.pages} pages`;

    if(book.read) {
        bookCard.classList.add('read');
    } else {
        bookCard.classList.add('unread');
    }

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookGrid.appendChild(bookCard);
}

function showModal() {
    addBookModal.style.display = 'block';
}

function closeModal() {
    addBookModal.style.display = 'none';
    document.getElementById('new-title').value = '';
    document.getElementById('new-author').value = '';
    document.getElementById('new-pages').value = '';
    document.getElementById('new-read').checked = '';
}

displayBooks(myBookList);

