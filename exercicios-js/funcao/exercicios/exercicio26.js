// 26) Fazer um programa para encontrar todos os pares entre 1 e 100.

function encontrarPares() {
    for(let i = 0; i < 100; i++) {
        if((i + 1)%2 == 0)
            console.log(i + 1)
    }
}

encontrarPares()