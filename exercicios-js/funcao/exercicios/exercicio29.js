/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function validarIntervalo(arrayParam) {
    let qtdIntervalo = 0

    for(let i = 0; i < arrayParam.length; i++) {
        if(arrayParam[i] >= 10 && arrayParam[i] <= 20)
            qtdIntervalo++
    }

    return `Seu array possui ${qtdIntervalo} ocorrências no intervalo entre 10 e 20`
}

let arrayNumeros = [1, 2, 33, 4, 68, 10, 11, 22, 19, 20, 16, 60, 17]
console.log(validarIntervalo(arrayNumeros))