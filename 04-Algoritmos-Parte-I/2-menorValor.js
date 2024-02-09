const livros = require('./listaLivros')

function menorValor(arrProdutos, posInicial) {
    let posMaisBarato = posInicial

    for (let posAtual = posInicial; posAtual < arrProdutos.length; posAtual++) {
        if (arrProdutos[posAtual].preco < arrProdutos[posMaisBarato].preco) {
            posMaisBarato = posAtual;
        }
    }

    return posMaisBarato;
} 

module.exports = menorValor


//const pos = menorValor(livros, 0)

//console.log(`O livro mais barato é ${livros[pos].titulo} e custa R$ ${livros[pos].preco}`)

