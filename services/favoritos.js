const fs = require('fs').promises;

async function getAllFavoritos() {
  try {
    const data = await fs.readFile('favoritos.json')
    return JSON.parse(data);
  } catch (error) {
    throw new Error('Erro ao ler o arquivo favoritos.json ' + error.message);
  }
}

async function deleteFromFavorites(id) {
  try {
    const favoritesData = await fs.readFile('favoritos.json')
    const favorites = JSON.parse(favoritesData)
    
    const attFavorites = favorites.filter(fav => fav.id !== id);

    fs.writeFile('favoritos.json', JSON.stringify(attFavorites))
  } catch (error) {
    console.error(error);
  }
}

async function addFavorito(id) {
  try {
    const booksData = await fs.readFile('books.json');
    const favoritosData = await fs.readFile('favoritos.json');

    const books = JSON.parse(booksData);
    const favoritos = JSON.parse(favoritosData);

    const novoFavorito = books.find(livro => livro.id === id);
    if (novoFavorito) {
      const novaListaDeFavoritos = [...favoritos, novoFavorito];
      fs.writeFile('favoritos.json', JSON.stringify(novaListaDeFavoritos));
    } else {
      console.error(`Livro com ID ${id} não encontrado.`);
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  getAllFavoritos,
  deleteFromFavorites,
  addFavorito
}