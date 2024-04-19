const { getAll, getBookByID, createBook, editBook, deleteABook, getBookByCategory } = require('../services/books.js');

async function getBooks(req, res) {
  try {
    const books = await getAll();
    res.send(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const book = await getBookByID(id);
      res.send(book);
    } else {
      res.status(422).send('ID inválido');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getBooksByCategory(req, res) {
  try {
    const cat = req.params.category;

    if (cat) {
      const books = await getBookByCategory(cat);
      res.send(books);
    } else {
      res.status(422).send('Nenhum livro encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function postBook(req, res) {
  try {
    const newBook = req.body;

    if (newBook.nome && newBook.id) {
      await createBook(newBook);
      res.status(201).send('Livro inserido com sucesso');
    } else {
      res.status(422).send('Todos os campos são necessários');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function patchBook(req, res) {
  try {
    const id = req.params.id;
    const bookToEdit = req.body;

    if (id && Number(id)) {
     await editBook(id, bookToEdit);
      res.status(200).send('Item atualizado');
    } else {
      res.status(422).send('ID inválido');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteBookById(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
     await deleteABook(id);
      res.status(200).send('Item deletado');
    } else {
      res.status(422).send('ID inválido');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBookById,
  getBooksByCategory
};
