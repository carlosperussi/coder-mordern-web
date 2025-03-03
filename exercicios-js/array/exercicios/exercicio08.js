// Desenvolva uma função que receba dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de multiplicação

function multiplicar(param1, param2) {
    let resultado = 0

    for(let i = 0; i < param2; i++) {
        resultado += param1
    }

    return resultado
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))