const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter( (_, idx) => {
    return medias[idx] < 5;
})

console.log(`Alunos reprovados: ${reprovados}`);