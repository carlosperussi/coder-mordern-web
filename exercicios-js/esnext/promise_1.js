const primeiroNome = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroNome)
    .then(primeiroNome)
    .then(letraMinuscula)
    .then(console.log)