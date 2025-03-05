// Crie uma função que receba uma string como parâmetro e conte quantas palavras tem nela

function contarPalavras(stringParam) {
    let qtdPalavras = 0
    let arrAux = new Array()

    arrAux = stringParam.split(" ")
    qtdPalavras = arrAux.length
    return qtdPalavras
}

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))