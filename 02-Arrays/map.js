const notas = [10, 9.5, 8, 7, 6]
const pontoExtra = 1

const notasAtualizadas = notas.map((nota) => {
    return nota + pontoExtra >= 10 ? nota : nota + pontoExtra
});

console.log(notasAtualizadas);