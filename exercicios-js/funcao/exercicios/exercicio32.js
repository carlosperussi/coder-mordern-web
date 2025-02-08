// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function calcularMedia(arrayParam) {
    let somaNumeros = 0;

    for(let i = 0; i < arrayParam.length; i++) {
        somaNumeros += arrayParam[i]
    }

    return (somaNumeros / arrayParam.length).toFixed(0)
}

let arrayNumeros = [5, 10, 25, 50, 78, 2]

console.log(calcularMedia(arrayNumeros))