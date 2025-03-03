// Crie uma função qe retorna a string "Olá," concatenada com um argumento text (a ser passado para a função) e com um ponto de exclamação no final.

function concatenarString(param) {
    return `Olá, ${param}!`
}

console.log(concatenarString("Fulano"))

// Meio mais verboso

function concatenarStringVerboso(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat('!')
}

console.log(concatenarStringVerboso("Fulano"))