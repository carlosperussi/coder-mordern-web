/* 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

function imprimirImpares(inicioParam = 0, fimParam = 100) {
    let auxFimParam = null
    let auxInicioParam = null

    if(inicioParam > fimParam) {
        auxFimParam = inicioParam
        auxInicioParam = fimParam
    }

    for(let i = auxInicioParam; i < auxFimParam; i++) {
        if(i % 2 == 1)
            console.log(i)
    }
        
}

imprimirImpares(20, 2)