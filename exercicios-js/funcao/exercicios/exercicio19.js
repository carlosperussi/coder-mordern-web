/* 19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function fecharPedido(param1, param2) {
    let arrProdutos = ["Cachorro Quente", "Hambúrguer Simples", "Cheeseburguer", "Bauru", "Refrigerante", "Suco"]

    switch(param1) {
        case 100:
            return `O produto escolhido foi ${arrProdutos[0]}. Você escolheu ${param2} unidades, seu pedido custará R$ ${(param2 * 3).toFixed(2)}`
            break
        case 200:
            return `O produto escolhido foi ${arrProdutos[1]}. Você escolheu ${param2} unidades, seu pedido custará R$ ${(param2 * 4).toFixed(2)}`
            break
        case 300:
            return `O produto escolhido foi ${arrProdutos[2]}. Você escolheu ${param2} unidades, seu pedido custará R$ ${(param2 * 5.5).toFixed(2)}`
            break
        case 400:
            return `O produto escolhido foi ${arrProdutos[3]}. Você escolheu ${param2} unidades, seu pedido custará R$ ${(param2 * 7.5).toFixed(2)}`
            break
        case 500:
            return `O produto escolhido foi ${arrProdutos[4]}. Você escolheu ${param2} unidades, seu pedido custará R$ ${(param2 * 3.5).toFixed(2)}`
            break
        case 600:
            return `O produto escolhido foi ${arrProdutos[5]}. Você escolheu ${param2} unidades, seu pedido custará R$ ${(param2 * 2.8).toFixed(2)}`
            break
        default:
            return "Produto inexistente!"
    }
}

console.log(fecharPedido(100, 3))
console.log(fecharPedido(200, 2))
console.log(fecharPedido(300, 3))
console.log(fecharPedido(400, 5))
console.log(fecharPedido(500, 2))
console.log(fecharPedido(600, 7))