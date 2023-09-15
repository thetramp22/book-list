
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

function displayBooks(myBookList) {
    for(let book of myBookList) {
        createBookCard(book);
    }
}

const bookGrid = document.getElementById("book-grid");

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
    console.log(bookCard);

}

displayBooks(myBookList);