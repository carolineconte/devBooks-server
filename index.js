const express = require('express');
const cors = require('cors')
const app = express();
const fs = require('fs')

const rotaFavoritos = require('./routes/favoritos')
const rotaLivro = require('./routes/books')

app.use(express.json())
app.use(cors({ origin: '*' }))

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavoritos);

app.get("/", (req, res) => {
  return res.json("Hello Word")
})

app.get("/livros", (req, res) => {
  const books = JSON.parse(fs.readFileSync('books.json'))
  res.send(books)
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Rodando na porta 
  http://localhost:${PORT}/`)
})