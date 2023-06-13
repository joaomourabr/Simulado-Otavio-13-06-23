//1) Verificar se um número é primo


function verificarPrimo(num) {
    if (num <= 1) {
        return false

    }
    for (var x = 2; x <= Math.sqrt(num); x++) {
        if (num % x === 0) {
            return false
        }
    }

    return true


}

verificarPrimo(2)





//2) Inverter uma string


function stringReversa(str) {
    return str.split("").reverse().join("")
}


stringReversa("Hello");



//3) Encontrar o maior elemento em um vetor


function maiorVetor(matriz) {
    var maiorNum = matriz[0][0]

    for (var x = 0; x < matriz.length; x++) {
        for (var y = 0; y < matriz[x].length; y++) {
            if (matriz[x][y] > maiorNum) {
                maiorNum = matriz[x][y]
            }
        }
    }

    return maiorNum
}

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var maiorNum = maiorVetor(matriz);
console.log(maiorNum)





//8) Verificar se uma string é um palíndromo


function palindromo(str) {
    var frase = str.replace(/[\s,áàãâéèêíìîóòõôúùûç\/]/g, '').toLowerCase()
    var fraseInvertida = frase.split('').reverse().join('')

    if (frase === fraseInvertida) {
        return true

    }
    else {
        return false
    }
}

palindromo('socorram me, subi no ônibus em marrocos')



//12) Verificar se um número é um quadrado perfeito

function verificarRaiz(num) {
    var raiz = Math.sqrt(num)

    if (raiz === Math.floor(raiz)) {
        return true
    }
    else {
        return false
    }
}

verificarRaiz(25)