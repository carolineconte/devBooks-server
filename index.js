const express = require('express');
const cors = require('cors')
const app = express();

const rotaFavoritos = require('./routes/favoritos')
const rotaLivro = require('./routes/books')

app.use(express.json())
app.use(cors({ origin: '*' }))

app.use('/', rotaLivro);
app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavoritos);
app.use('/myfavorites', rotaFavoritos);


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Rodando na porta 
  http://localhost:${port}/`)
})