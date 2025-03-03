// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundos será o número de vezes que haverá repetição. Um array será retornado.

function repetir(param1, param2) {
    let arrayResultado = []

    for(let i = 0; i < param2; i++) {
        arrayResultado.push(param1)
    }

    return arrayResultado
}

console.log(repetir('código', 2))
console.log(repetir(7, 3))

// Solução menos verbosa

function repetir2(param1, param2) {
    return Array(param2).fill(param1)
}

console.log(repetir2('código', 2))
console.log(repetir2(7, 3))