
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
    for(let i = 0; i < myBookList.length; i++) {
        createBookCard(myBookList[i], i);
    }
}

function resetBookGrid() {
    bookGrid.innerHTML = '';
}

function createBookCard(book, i) {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const btnContainer = document.createElement('div');
    const removeBtn = document.createElement('i');
    const toggleReadBtn = document.createElement('i');

    bookCard.classList.add('book-card');
    btnContainer.classList.add('book-card-btns');
    removeBtn.classList.add('fa-regular');
    removeBtn.classList.add('fa-trash-can');
    removeBtn.setAttribute('data-key', `${i}`);
    toggleReadBtn.classList.add('fa-solid');
    toggleReadBtn.classList.add('fa-book');
    toggleReadBtn.setAttribute('data-key', `${i}`);

    title.textContent = `${book.title}`;
    author.textContent = `Written by ${book.author}`;
    pages.textContent = `${book.pages} pages`;

    removeBtn.addEventListener('click', removeBookCard);
    toggleReadBtn.addEventListener('click', toggleRead);

    if(book.read) {
        bookCard.classList.add('read');
    } else {
        bookCard.classList.add('unread');
    }

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    btnContainer.appendChild(removeBtn);
    btnContainer.appendChild(toggleReadBtn);
    bookCard.appendChild(btnContainer);
    bookGrid.appendChild(bookCard);
}

function removeBookCard(e) {
    myBookList.splice(e.target.getAttribute('data-key'), 1);
    displayBooks(myBookList);
}

function toggleRead(e) {
    let book = myBookList[e.target.getAttribute('data-key')];
    book.read = !book.read;
    displayBooks(myBookList);
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

