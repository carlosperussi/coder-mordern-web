// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se o numero é igual a minimo ou maximo. Caso o parâmetro inclusivo não seja informao, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se o numero é igual a minimo ou máximo.

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo)
        return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}

console.log(estaEntre(10, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))