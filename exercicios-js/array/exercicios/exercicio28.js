// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array qye tem a quantidade de dígitos indicada pelo segundo parametro

function filtrarPorQuantidadeDeDigitos(arrayParam, qtdParam) {
    return arrayParam.filter(numero => {
        const quantidadeDeDigitos = String(numero).length
        return quantidadeDeDigitos === qtdParam
    })
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))