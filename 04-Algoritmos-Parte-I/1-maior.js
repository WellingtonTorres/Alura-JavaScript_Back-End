const livros = require('./listaLivros')

let posMaisBarato = 0

for (let posAtual = 0; posAtual < livros.length; posAtual++) {
    if (livros[posAtual].preco < livros[posMaisBarato].preco) {
        posMaisBarato = posAtual;
    }
}

console.log(`O livro mais barato é ${livros[posMaisBarato].titulo} e custa R$ ${livros[posMaisBarato].preco}`);