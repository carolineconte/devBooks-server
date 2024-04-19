const fs = require('fs');
const { getAll, getBookByID, createBook, editBook, deleteABook, getBookByCategory } = require('../services/books');

function getBooks(req, res) {
  try {
    const books = getAll()
    res.send(books)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      const book = getBookByID(id)
      res.send(book)
    } else {
      res.status(422).send('ID invalido')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function getBooksByCategory(req, res) {
  try {
    const cat = req.params.category

    if (cat) {
      const book = getBookByCategory(cat)
      res.send(book)
    } else {
      res.status(422).send('Nenhum livro encontrado')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body

    if (req.body.nome && req.body.id) {
      createBook(newBook)
      res.status(201).send('Livro inserido com sucesso')
    } else {
      res.status(422).send('Todos os campos sao necessarios')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id
    const bookToEdit = req.body

    if (id && Number(id)) {
      editBook(id, bookToEdit)
      res.status('200').send('Item atualizado')
    } else {
      res.status(422).send('ID invalido')
    }

  } catch (error) {
    res.status(500).send(error.message)
  }
}

function deleteBookById(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      deleteABook(id)
      res.status('200').send('Item deletado')
    } else {
      res.status(422).send('ID invalido')
    }

  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBookById,
  getBooksByCategory
}