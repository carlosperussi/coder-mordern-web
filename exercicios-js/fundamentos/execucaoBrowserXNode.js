let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando variável sem var e let!
abc = 3 // não recomendado!!!!
console.log(global.abc)


// Conheça o runtime onde o seu javascript está sendo executado: se é browser para front ou node para back