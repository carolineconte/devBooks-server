const express = require('express');
const cors = require('cors')
const app = express();

const rotaFavoritos = require('./routes/favoritos')
const rotaLivro = require('./routes/books')

app.use(express.json())
app.use(cors({ origin: '*' }))

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavoritos);
app.use('/myfavorites', rotaFavoritos);

// Middleware para lidar com rotas não encontradas (erro 404)
app.use((req, res, next) => {
  res.status(404).send("Desculpe, a página que você está procurando não foi encontrada.");
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Rodando na porta 
  http://localhost:${port}/`)
})