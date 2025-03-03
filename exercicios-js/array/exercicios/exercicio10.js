// Elabore uma função que recebe um número como parâmtro e retorne ma string com símbolo "+" na quantidade especificada do parâmetro.

function simboloMais(param1) {
    let resultado = ""
    
    for(let i = 0; i < param1; i++) {
        resultado += "+"
    }

    return resultado
}

console.log(simboloMais(2))
console.log(simboloMais(4))

// Solução menos verbosa

function simboloMais2(param1) {
    return Array(param1).fill('+').join('')
}

console.log(simboloMais2(2))
console.log(simboloMais2(4))
