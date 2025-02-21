const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// Com destructoring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

// COmo setamos o writable para false, não permitirá a alteração do valor da chave
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, d:4, a:5}
const obj = Object.assign(dest, o1, o2)
Object.entries(obj).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.freeze(obj)
Object.d = 1234
console.log(obj)