// Escreva uma função que receba um array de números e retornará a soma de todos os números deste array

function somarNumeros(arrayParam) {
    let arrayParamAux = arrayParam
    let soma = 0

    arrayParamAux.forEach(function(element, index) {
        if(typeof(element) == "string")
            arrayParamAux.splice(index, 1)
    });

    arrayParamAux.forEach(numero => soma += numero)
    return soma
}

console.log(somarNumeros([10, "20", 30]))
console.log(somarNumeros([100, 2, 30]))