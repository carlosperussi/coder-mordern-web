// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

function receberNumerosComIndicesPares(arrayParam) {
    return arrayParam.filter((numero, indice) => {
        let numeroPar = numero % 2 === 0
        let indicePar = indice % 2 === 0

        return numeroPar && indicePar
    })
}

console.log(receberNumerosComIndicesPares([1, 2, 3, 4]))
console.log(receberNumerosComIndicesPares([10, 70, 22, 43]))