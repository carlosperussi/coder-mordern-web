/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

const valoresBase = {valorplano: 100, adicional10anos: 80, adicional30anos: 50, adicional60anos: 95, adicionalidosos: 130}

function calcularValor(idadeParam) {
    if(idadeParam < 10)
        return `O valor à ser pago será de R$ ${valoresBase.valorplano + valoresBase.adicional10anos}`
    else if(idadeParam < 30)
        return `O valor à ser pago será de R$ ${valoresBase.valorplano + valoresBase.adicional30anos}`
    else if(idadeParam < 60)
        return `O valor à ser pago será de R$ ${valoresBase.valorplano + valoresBase.adicional60anos}`
    else
        return `O valor à ser pago será de R$ ${valoresBase.valorplano + valoresBase.adicionalidosos}`
}

console.log(calcularValor(60))