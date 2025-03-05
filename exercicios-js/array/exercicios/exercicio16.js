// A fim de manter o calendário anual ajustado com o movimento de transalação da Terra, criou-se    os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.

function checarAnoBissexto(ano) {
    let divisivelPorQuatro = ano % 4 == 0
    let divisivelPorCem = ano % 100 == 0
    let divisivelPorQuatrocentos = ano % 400 == 0
    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}

console.log(checarAnoBissexto(2100))