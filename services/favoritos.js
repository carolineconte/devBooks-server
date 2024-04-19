const fs = require('fs')

function getAllFavoritos() {
  return JSON.parse(fs.readFileSync('favoritos.json'))
}

function deleteFromFavorites(id) {
  const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))
    .filter(fav => fav.id != id);

  fs.writeFileSync('favoritos.json', JSON.stringify(favoritos))
}

function addFavorito(id) {
  try {
    const books = JSON.parse(fs.readFileSync('books.json'));
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))

    const novoFavorito = books.filter(livro => livro.id == id)[0]
    const novaListaDeFavoritos = [...favoritos, novoFavorito]
    console.log(novoFavorito)
    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaDeFavoritos))
  
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  getAllFavoritos,
  deleteFromFavorites,
  addFavorito
}