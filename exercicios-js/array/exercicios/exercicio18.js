// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo é de somar o total das despesas.
// Crie uma função que receba um array de produto e retorne o total de despesas.

function despesasTotais(arrayParam) {
    let arrayParamAux = arrayParam
    let soma = 0

    arrayParamAux.forEach(element => {
        soma += element.preco
    });

    return soma
}

console.log(despesasTotais([
    {nome: "Jornal Online", categoria: "Informação", preco: 89.99}, 
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}]))

// Outra forma menos verbosa

/*
function despesasTotais(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}
*/