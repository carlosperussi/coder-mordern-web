// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se rpete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas

function contarCaractere(caractereParam, stringParam) {
    let contador = 0

    for(let i = 0; i < stringParam.length; i++) {
        if(stringParam.charAt(i) === caractereParam)
            contador++
    }

    return contador
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))