// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function calcularRestoDivisao(param1, param2) {
    console.log("Resultado: " + Math.floor(param1/param2))
    console.log(`Resto: ${param1 % param2}`)
}

calcularRestoDivisao(11, 4)