const fs = require('fs') // usado para manipular o arquivo json.
//JSON.parse() -> transforma json em texto.
//JSON.stringify() -> transforma texto em json.

//readFileSync acessa o arquivo json, recebe 1 parametro - localizacao do arquivo json
const data = JSON.parse(fs.readFileSync('books.json'))

//adicionar um novo dado ao json
const newBook = { id: '3', nome: 'novo livro' }
//writeFileSync() para escrever no arquivo json - primeiro parametro = localizacao do arq, segundo parametro spread dos dados existentes e adicao do novo
fs.writeFileSync("books.json", JSON.stringify([...data, newBook]))

console.log(JSON.parse(fs.readFileSync('books.json')))