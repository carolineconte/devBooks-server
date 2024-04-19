const fs = require('fs-extra');
const path = require('path');

async function getAll() {
  try {
    const filePath = path.join('books.json'); // Obtém o caminho absoluto do arquivo
    const data = await fs.readFile(filePath, 'utf8'); // Lê o conteúdo do arquivo
    return JSON.parse(data); // Converte o conteúdo para um objeto JavaScript
  } catch (error) {
    throw new Error('Erro ao ler o arquivo books.json: ' + error.message);
  }
}


async function getBookByID(id) {
  const books = await getAll();
  return books.find(book => book.id === id);
}

async function getBookByCategory(category) {
  const books = await getAll();
  return books.filter(book => book.category === category);
}

async function createBook(newBook) {
  try {
    const books = await getAll();
    const updatedBooks = [...books, newBook];
    await fs.writeFile(path.join(__dirname, 'books.json'), JSON.stringify(updatedBooks, null, 2));
  } catch (error) {
    throw new Error('Erro ao criar um novo livro: ' + error.message);
  }
}

async function editBook(id, modifications) {
  try {
    const books = await getAll();
    const indexToEdit = books.findIndex(book => book.id === id);
    if (indexToEdit === -1) throw new Error('Livro não encontrado.');

    const editedBook = { ...books[indexToEdit], ...modifications };
    books[indexToEdit] = editedBook;
    await fs.writeFile(path.join(__dirname, 'books.json'), JSON.stringify(books, null, 2));
  } catch (error) {
    throw new Error('Erro ao editar o livro: ' + error.message);
  }
}

async function deleteABook(id) {
  try {
    const books = await getAll();
    const updatedBooks = books.filter(book => book.id !== id);
    await fs.writeFile(path.join(__dirname, 'books.json'), JSON.stringify(updatedBooks, null, 2));
  } catch (error) {
    throw new Error('Erro ao deletar o livro: ' + error.message);
  }
}

module.exports = {
  getAll,
  getBookByID,
  getBookByCategory,
  createBook,
  editBook,
  deleteABook
};
