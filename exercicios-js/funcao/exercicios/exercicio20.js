/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function sacarDinheiro(valorSaque) {
    let contador1 = 0
    let contador5 = 0
    let contador10 = 0
    let contador50 = 0
    let contador100 = 0
    let valorSaqueAux = valorSaque

    while(valorSaqueAux != 0) {
        if(valorSaqueAux >= 100) {
            valorSaqueAux = valorSaqueAux - 100
            contador100++
        }else if(valorSaqueAux >= 50) {
            valorSaqueAux = valorSaqueAux - 50
            contador50++
        }else if(valorSaqueAux >= 10) {
            valorSaqueAux = valorSaqueAux - 10
            contador10++
        }else if(valorSaqueAux >= 5) {
            valorSaqueAux = valorSaqueAux - 5
            contador5++
        }else if(valorSaqueAux >= 1) {
            valorSaqueAux = valorSaqueAux - 1
            contador1++
        }
    }

    console.log(`Ao sacar R$ ${(valorSaque).toFixed(2).toString().replace(".", ",")}, você receberá:\n- ${contador100} notas de R$ 100,00;\n- ${contador50} notas de R$ 50,00;\n- ${contador10} notas de R$ 10,00);\n- ${contador5} notas de R$ 5,00;\n- ${contador1} notas de R$ 1,00.`)
}

sacarDinheiro(153)