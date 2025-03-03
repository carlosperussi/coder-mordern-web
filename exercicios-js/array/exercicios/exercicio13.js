// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido

function filtrarNumeros(arrayParam) {
    let arrayAux = []

    for(let i = 0; i < arrayParam.length; i++) {
        if(typeof(arrayParam[i]) == "number")
            arrayAux.push(arrayParam[i])
    }

    return arrayAux
}

console.log(filtrarNumeros([1, 2, "3", "teste"]))
console.log(filtrarNumeros(['Javascript', 1, '3', 'Web', 20]))
console.log(filtrarNumeros(['a', 'b', 'c']))