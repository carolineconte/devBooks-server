const { getAllFavoritos, deleteFromFavorites, addFavorito } = require('../services/favoritos')

async function getFavoritos(req, res) {
  try {
    const favoritos = await getAllFavoritos()
    res.send(favoritos)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function novoFavorito(req, res) {
  try {
    const id = req.params.id

    await addFavorito(id)
    res.status(201).send('Livro adicionado aos favoritos com sucesso')
  } catch (error) {
    res.status(500).send(`Erro: ${error.message}`);
  }
}

async function removeFavorito(req, res) {
  try {
    const id = req.params.id
    if (id && Number(id)) {
      await deleteFromFavorites(id)
      res.status(200).send('Item removido')
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