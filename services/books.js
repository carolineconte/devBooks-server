const fs = require('fs')

function getAll() {
  return JSON.parse(fs.readFileSync('/books.json'))
}

function getBookByID(id) {
  const books = JSON.parse(fs.readFileSync('/books.json'));

  const bookById = books.filter(book => book.id == id)[0];
  return bookById
}

function getBookByCategory(category) {
  const books = JSON.parse(fs.readFileSync('books.json'));

  const bookByCategorie = books.filter(book => book.category === category);
  return bookByCategorie
}

function createBook(newBook) {
  const books = JSON.parse(fs.readFileSync('books.json'));
  const attList = [...books, newBook]

  fs.writeFileSync('books.json', JSON.stringify(attList))
}

function editBook(id, modificacoes) {
  let books = JSON.parse(fs.readFileSync('books.json'));
  const indexToEdit = books.findIndex(book => book?.id === id)

  const editedBook = { ...books[indexToEdit], ...modificacoes }
  //...books[indexToEdit] -> {id:'2',nome:'livro 2'}
  //...modificacoes -> {nome:'livro 2 atualizado'}
  //newData -> cria o novo objeto depois compara as chaves da modificacoes e substitui o valor
  books[indexToEdit] = editedBook
  fs.writeFileSync('books.json', JSON.stringify(books))
}

function deleteABook(id) {
  const newList = JSON.parse(fs.readFileSync('books.json'))
  .filter(book => book?.id !== id);

  fs.writeFileSync('books.json', JSON.stringify(newList))
}

module.exports = {
  getAll,
  getBookByID,
  createBook,
  editBook,
  deleteABook,
  getBookByCategory
}