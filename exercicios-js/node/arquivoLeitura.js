const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// Leitura de forma sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Leitura de forma assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Facilitando a abertura de arquivos JSON
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})