// Crie uma função que receba um array de números e retorne o menor número desse array.

function menorNumero(arrayParam) {
    arrayParam.sort(function(a, b) {return a-b})

    return arrayParam[0]
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 30, 3]))

// Solução menos verbosa

/*
function menorNumero(numeros) {
    return Math.min(...numeros);
}
*/