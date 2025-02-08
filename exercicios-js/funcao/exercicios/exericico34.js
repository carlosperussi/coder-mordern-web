/* 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function encontrarCaracteres(param1, param2) {
    let contemCaracter = true

    for(let i = 0; i < param1.length; i++) {
        let caracterString1 = param1.charAt(i).toLowerCase()

        for(let j = 0; j < param2.length; j++) {
            let caracterString2 = param2.charAt(j).toLowerCase()

            if(caracterString1 == caracterString2) {
                contemCaracter = true
                break
            }else
                contemCaracter = false
        }
        if(!contemCaracter)
            return contemCaracter
    }

    for(let i = 0; i < param2.length; i++) {
        let caracterString2 = param2.charAt(i).toLowerCase()

        for(let j = 0; j < param1.length; j++) {
            let caracterString1 = param1.charAt(j).toLowerCase()

            if(caracterString2 == caracterString1) {
                contemCaracter = true
                break
            }else
                contemCaracter = false
        }
        if(!contemCaracter)
            return contemCaracter
    }

    return contemCaracter
}

let stringParam01 = "ABCD"
let stringParam02 = "FGHI"

console.log(encontrarCaracteres(stringParam01, stringParam02))