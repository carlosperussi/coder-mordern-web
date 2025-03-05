// Numa aplicação web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números

function calcularMedia(arrayParam) {
    let soma = 0
    let media = 0

    soma = arrayParam.reduce((acumulador, valor) => acumulador + valor)
    media = soma / arrayParam.length

    return media
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))