// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function lerParesEImpares(arrayParam) {
    let qtdPares = 0
    let qtdImpares = 0

    for(let i = 0; i < arrayParam.length; i++) {
        if(arrayParam[i] % 2 == 0)
            qtdPares++
        else
            qtdImpares++
    }

    return `Seu array possui ${qtdPares} números par e ${qtdImpares} números ímpar!`
}

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(lerParesEImpares(arrayNumeros))