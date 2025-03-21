// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro, porém, com as posições das chaves e valores invertidas.

function inverter(objetoParam) {
    const objetoInvertido = {}

    Object.entries(objetoParam).forEach( parChaveValor => {
        const chave = 0, valor = 1

        objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })

    return objetoInvertido
}

console.log(inverter({a: 1, b: 2, c: 3}))