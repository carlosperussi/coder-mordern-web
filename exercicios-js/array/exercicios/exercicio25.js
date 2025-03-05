// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.
// Escreva uma função q erecebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá filtras as palavras do array que contêm nelas a string do primeiro parâmetro.

function buscarPalavrasSemelhantes(caractereParam, arrayParam) {
    let arrAux = new Array()

    arrayParam.forEach(element => {
        if(element.search(caractereParam) == 0)
            arrAux.push(element)
    })

    return arrAux
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]))

// Solução menos verbosa
/*
function buscarPalavrasSemelhantes(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}
*/