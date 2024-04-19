const fs = require('fs');
const { getAllFavoritos, deleteFromFavorites, addFavorito } = require('../services/favoritos')

function getFavoritos(req, res) {
  try {
    const favoritos = getAllFavoritos()
    res.send(favoritos)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function novoFavorito(req, res) {
   const id = req.params.id
  try {
    addFavorito(id)
    res.status(201).send('Livro adicionado aos favoritos com sucesso')
  } catch (error) {
    res.status(500).send(error.message,'erro')
  }
}

function removeFavorito(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      deleteFromFavorites(id)
      res.status('200').send('Item removido')
    } else {
      res.status(422).send('ID invalido')
    }

  } catch (error) {
    res.status(500).send(error.message)
  }
}


module.exports = {
  getFavoritos,
  novoFavorito,
  removeFavorito
}