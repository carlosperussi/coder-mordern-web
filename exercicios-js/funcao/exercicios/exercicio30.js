// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function listarMaiorEMenor(arrayParam) {
    let maiorNumero
    let menorNumero

    for(let i = 0; i < arrayParam.length; i++) {
        if(maiorNumero === undefined && menorNumero === undefined) {
            maiorNumero = arrayParam[i]
            menorNumero = arrayParam[i]
        }else {
            if(arrayParam[i] > maiorNumero)
                maiorNumero = arrayParam[i]
            if(arrayParam[i] < menorNumero)
                menorNumero = arrayParam[i]
        }
    }

    return [maiorNumero, menorNumero]
}

let arrayNumeros = [1, 0, 3, 30, 22, 60, 12, 58]
console.log(listarMaiorEMenor(arrayNumeros))