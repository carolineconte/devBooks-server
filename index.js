const express = require('express');
const cors = require('cors')
const app = express();

const rotaFavoritos = require('./routes/favoritos')
const rotaLivro = require('./routes/books')

app.use(express.json())
app.use(cors({origin:'*'}))

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavoritos);

app.get("/",(req,res)=>{
  return res.json("Hello Word")
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Rodando na porta 
  http://localhost:${PORT}/`)
})