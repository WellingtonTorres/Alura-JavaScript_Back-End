const livros = require('./listaLivros')
const menorValor = require('./2-menorValor')
console.log(livros);

for (elemento of livros) { 
    let index = 0
    let menor = menorValor(livros,index);
    let livroAtual = livros[index];
    let livroMenor = livros[menor];

    livros[index] = livroMenor;
    livros[menor] = livroAtual;
    index++;
}

console.log(livros);

//const pos = menorValor(livros, 0)

//console.log(`O livro mais barato é ${livros[pos].titulo} e custa R$ ${livros[pos].preco}`)

