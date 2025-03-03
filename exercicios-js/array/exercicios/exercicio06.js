// Escreva uma função que receba um valor booleano ou numérico. Se o parâmtro fornecido for booleano, o retorn da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipos acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo..."

function inverso(param) {
    if(typeof(param) == "number")
        return -param
    else if(typeof(param) == "boolean")
        return !param
    else
        return `Booleano ou número esperados. O parâmetro informado é do tipo ${typeof(param)}!`
}

console.log(inverso(true))