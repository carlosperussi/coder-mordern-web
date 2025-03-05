// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

function segundoMaior(arrayParam) {
    const numerosOrdenados = arrayParam.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]
    
    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))