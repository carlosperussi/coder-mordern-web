// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template string
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructoring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade, nome} = {nome: 'Ana', idade: 9}
// const {idade: i, nome} = {nome: 'Ana', idade: 9} Deste modo vc renomeia a variavel
console.log(idade, nome)