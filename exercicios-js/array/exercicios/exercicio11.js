// Crie uma função que receba um array e retorne o primeiro e o último elemento desse array como um novo array

function receberPrimeiroEUltimoElemento(arrayParam) {
    let primeiroElemento = arrayParam.shift()
    let ultimoElemento = arrayParam.pop()

    return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([7, 14, 'olá']))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))