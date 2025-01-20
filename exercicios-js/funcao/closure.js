// CLosure é o escopo criado quando você define a sua função. Esse escopo permite a função acessar e manipular variaveis externas a função

// Contexto lexico em ação
const x = "Global"

function fora() {
    const x = "Local"
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())