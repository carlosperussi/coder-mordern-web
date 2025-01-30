/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

function identificarNumero(param1) {
    switch(param1) {
        case 0:
            return "Número zero"
            break
        case 1:
            return "Número um"
            break
        case 2:
            return "Número dois"
            break
        case 3:
            return "Número três"
            break
        case 4:
            return "Número quatro"
            break
        case 5:
            return "Número cinco"
            break
        case 6:
            return "Número seis"
            break
        case 7:
            return "Número sete"
            break
        case 8:
            return "Número oito"
            break
        case 9:
            return "Número nove"
            break
        case 10:
            return "Número dez"
            break
        default:
            return "Favor informar um número válido!"
    }
}

console.log(identificarNumero(0))
console.log(identificarNumero(1))
console.log(identificarNumero(2))
console.log(identificarNumero(3))
console.log(identificarNumero(4))
console.log(identificarNumero(5))
console.log(identificarNumero(6))
console.log(identificarNumero(7))
console.log(identificarNumero(8))
console.log(identificarNumero(9))
console.log(identificarNumero(10))
console.log(identificarNumero(11))