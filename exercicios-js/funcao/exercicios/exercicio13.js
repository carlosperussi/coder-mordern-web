/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function validarDiaSemana(param1) {
    switch (param1) {
        case 1:
            return "Hoje é domingo, fim de semana"
        case 2:
            return "Hoje é segunda-feira, dia de semana"
        case 3:
            return "Hoje é terça-feira, dia de semana"
        case 4:
            return "Hoje é quarta-feira, dia de semana"
        case 5:
            return "Hoje é quinta-feira, dia de semana"
        case 6:
            return "Hoje é sexta-feira, dia de semana"
        case 7:
            return "Hoje é sábado, fim de semana"
    }
}

console.log(validarDiaSemana(1))
console.log(validarDiaSemana(2))
console.log(validarDiaSemana(3))
console.log(validarDiaSemana(4))
console.log(validarDiaSemana(5))
console.log(validarDiaSemana(6))
console.log(validarDiaSemana(7))