/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function calcularJurosSimples(param1, param2, param3) {
    let capitalInicial = param1
    let taxaJuros = param2
    let tempoAplicacao = param3

    return capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
}

function calcularJurosCompostos(param1, param2, param3) {
    let capitalInicial = param1
    let taxaJuros = param2
    let tempoAplicacao = param3

    return capitalInicial * (1 + taxaJuros) ** tempoAplicacao
}

console.log(calcularJurosSimples(100, 0.1, 2))
console.log(calcularJurosCompostos(100, 0.1, 2).toFixed(2))