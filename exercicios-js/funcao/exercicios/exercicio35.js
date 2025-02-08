/* 35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console. */

function adicionarVetor(vetorParam1, vetorParam2) {
    let vetorConcat = vetorParam1

    for(let i = 0; i < vetorParam2.length; i++) {
        vetorConcat.push(vetorParam2[i])
    }

    return `O novo vetor ficou como: ${vetorConcat}`
}

let vetorNumeros01 = [1, 2, 3, 4, 5]
let vetorNumeros02 = [6, 7, 8, 9, 10]

console.log(adicionarVetor(vetorNumeros01, vetorNumeros02))