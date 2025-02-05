/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function calcularMediaFinal(codigoAlunoParam, notaParam1, notaParam2, notaParam3) {
    let notasFinal = [notaParam1, notaParam2, notaParam3]
    let mediaFinal = ""
    // PSC: dentro do sort existe uma arrow function para comparação de valores. o sort() só ordena strings, então através desta função é possível ordenar valores numéricos
    notasFinal.sort((a, b) => a < b ? 1 : -1)
    mediaFinal = (notasFinal[0] * 4 + notasFinal[1] * 3 + notasFinal[1] * 3) / 10
    
    console.log(`Código do aluno: ${codigoAlunoParam}. Notas: ${notaParam1}, ${notaParam2} e ${notaParam3}. Resultado final: ${mediaFinal > 5 ? 'Aprovado!' : 'Reprovado!'}`)
}

calcularMediaFinal(123, 1.8, 6, 3.5)