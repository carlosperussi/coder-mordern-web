// Desenvolva uma função que recebe como parâmetro um objeto e retorne um aray de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto

function objetoParaArray(objetoParam) {
    let arrayResultado = []

    for(let chave in objetoParam)
        arrayResultado.push([chave, objetoParam[chave]])

    return arrayResultado
}

console.log(objetoParaArray({nome: 'Maria', profissao: 'Desenvolvedora de software'}))