const livros = require('./listaLivros')
const menorValor = require('./2-menorValor')

for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual);
    let livroAtual = livros[atual];
    let livroMenor = livros[menor];

    livros[atual] = livroMenor;
    livros[menor] = livroAtual;
}

console.log(livros);