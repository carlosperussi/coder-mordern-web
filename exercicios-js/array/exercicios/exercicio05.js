// Cria uma função que receba dois números e retorne se o primneiro é maior ou igual ao segundo

function maiorOuIgual(param1, param2) {
    if(typeof param1 != typeof param2)
        return false

    return param1 >= param2
}

console.log(maiorOuIgual(5, 1))