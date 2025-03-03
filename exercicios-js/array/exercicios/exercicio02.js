// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias. Considere que um ano tem 365 dias, desconsidere anos bissextos (366 djas) e desconsidere também dias decorridos desde o último aniversário

function calcularIdadeEmDias(idade) {
    return 365 * idade
}

console.log(calcularIdadeEmDias(37))