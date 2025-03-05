// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, sem as vogais

function removerVogais(stringParam) {
    return stringParam.replace(/[aeiou]/gi, '')
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))