/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function contarNegativos(arrayParam) {
    let qtdNegativos = 0

    for(let i = 0; i < arrayParam.length; i++) {
        if(arrayParam[i] < 0)
            qtdNegativos++
    }

    return `Seu array possui ${qtdNegativos} números negativos!`
}

let arrayNumeros = [1, 2, 3, 4, 5, -5, -4, -3, -2, -1, 0]
console.log(contarNegativos(arrayNumeros))