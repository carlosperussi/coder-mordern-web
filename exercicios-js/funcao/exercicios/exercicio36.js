/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

let arrayNumeros = [1, 2, 3, 4, 5]

function imprimirMultiplicador(arrayParam, multiplicadorParam) {
    let arrayMultiplicado = []

    arrayParam.forEach(element => {
        arrayMultiplicado.push(element * multiplicadorParam)
    })

    return arrayMultiplicado;
}

function imprimirMultiplicadorMaior(arrayParam, multiplicadorParam) {
    let arrayMultiplicado = []

    if(multiplicadorParam < 5)
        return

    arrayParam.forEach(element => {
        arrayMultiplicado.push(element * multiplicadorParam)
    })

    return arrayMultiplicado
}

console.log(imprimirMultiplicador(arrayNumeros, 2))
console.log(imprimirMultiplicadorMaior(arrayNumeros, 6))


/*let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado1 = []
    vetor.forEach(elemento => {
        vetorResultado1.push(elemento * multiplicador) 
    });

    return vetorResultado1
}

function multiplicaVetorSeMaiorQue5(vetor, multiplicador){
    let vetorResultado2 = []
    if(multiplicador < 5) return
    vetor.forEach(elemento => {
        vetorResultado2.push(elemento * multiplicador) 
    });

    return vetorResultado2
}

console.log(multiplicaVetor(vetor, 3))
console.log(multiplicaVetorSeMaiorQue5(vetor, 11))*/