const alunos = ['Lara','Mateus','Fabio']
const medias = [10,9,7]

const listaAlunosMedias = [alunos,medias]

//console.log(listaAlunosMedias);

const aluno = "Fabio"

exibeNomeNota(aluno)

function exibeNomeNota(aluno) {
    // const alunos = listaAlunosMedias[0]
    // const medias = listaAlunosMedias[1]
    const [alunos, medias] = listaAlunosMedias
    if (alunos.includes(aluno)){
        const indice = alunos.indexOf(aluno)
        const mediaAluno = medias[indice]

        console.log(`${aluno}, tem a média ${mediaAluno}.`);

    } else {
        console.log(`${aluno}, nao esta cadastrado!`);
    }
}