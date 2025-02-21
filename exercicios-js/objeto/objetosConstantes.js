const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- {...}
//pessoa = {nome: 'Ana'}
//console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Carlos'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)