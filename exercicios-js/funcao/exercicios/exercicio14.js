/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */

function validarFrutas(param1) {
    switch(param1) {
        case "maçã":
            return "Não vendemos essa fruta aqui"
        case "kiwi":
            return "Estamos com escassez de kiwi"
        case "melancia":
            return "Aqui está, são 3 reais o kilo"
        default:
            return "Por favor, informe uma fruta!"
    }
}

console.log(validarFrutas("maçã"))
console.log(validarFrutas("kiwi"))
console.log(validarFrutas("melancia"))
console.log(validarFrutas("tomate"))