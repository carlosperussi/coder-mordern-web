/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

function calculadora(param1, param2, param3) {
    switch(param3) {
        case "+":
            return param1 + param2
        case "-":
            return param1 - param2
        case "*":
            return param1 * param2
        case "/":
            return param1 / param2 
        default:
            return "Esta é uma operação matemática inválida."
    }
}

console.log(calculadora(1, 2, "+"))
console.log(calculadora(3, 2, "-"))
console.log(calculadora(4, 3, "*"))
console.log(calculadora(6, 2, "/"))
console.log(calculadora(1, 2, "!"))