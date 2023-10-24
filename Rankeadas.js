rankeadas()
let vitorias = 80
let derrotas = 30
let NumJogos = ""

function rankeadas(vitorias) {
    return vitorias
}

function rankeadas(derrotas) {
    return derrotas
}

NumJogos = vitorias - derrotas

if (NumJogos <= 10) {
    nivel = "Ferro"
} else if (NumJogos <= 20) {
    nivel = "Bronze"
} else if (NumJogos <= 50) {
    nivel = "Prata"
} else if (NumJogos <= 80) {
    nivel = "Ouro"
} else if (NumJogos <= 90) {
    nivel = "Diamante"
} else if (NumJogos <= 100) {
    nivel = "Lendário"
} else if (NumJogos > 100) {
    nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + NumJogos, " está no nível de " + nivel)