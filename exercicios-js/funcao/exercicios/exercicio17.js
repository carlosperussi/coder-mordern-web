/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function calcularAumentoSalarial(param1, param2) {
    switch(param2) {
        case "A":
            return `Seu salário atual é R$ ${param1}. Seu salário ajustado será ${(param1 + (10 * param1)/100).toFixed(2)}`
        case "B":
            return `Seu salário atual é R$ ${param1}. Seu salário ajustado será ${(param1 + (15 * param1)/100).toFixed(2)}`
        case "C":
            return `Seu salário atual é R$ ${param1}. Seu salário ajustado será ${(param1 + (20 * param1)/100).toFixed(2)}`
        default:
            return "Informe um plano de trabalho válido."
    }
}
console.log(calcularAumentoSalarial(1280.00, "A"))
console.log(calcularAumentoSalarial(1280.00, "B"))
console.log(calcularAumentoSalarial(1280.00, "C"))
console.log(calcularAumentoSalarial(1280.00, "D"))