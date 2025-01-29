/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação 
e divisão desses valores.*/

function calcularResultados(param1, param2) {
    let soma = param1 + param2
    let subtracao = param1 - param2
    let multiplicacao = param1 * param2
    let divisao = param1 / param2
    return `O resultado das operações é \n - Soma: ${soma}\n - Subtracao: ${subtracao}\n - Multiplicação: ${multiplicacao}\n - Divisão: ${divisao}`
}

console.log(calcularResultados(10, 5))